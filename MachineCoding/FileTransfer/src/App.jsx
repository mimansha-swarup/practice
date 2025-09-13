import React, { useState } from "react";

const left = {
  HTML: false,
  JavaScript: false,
  CSS: false,
  TypeScript: false,
};
const right = {
  React: false,
  Angular: false,
  Vue: false,
  Svelte: false,
};
export default function App() {
  const [leftSide, setLeftSide] = useState(left);
  const [rightSide, setRightSide] = useState(right);

  const onAllRight = () => {
    setRightSide((prev) => ({ ...prev, ...leftSide }));
    setLeftSide({});
  };
  const onAllLeft = () => {
    setLeftSide((prev) => ({ ...prev, ...rightSide }));
    setRightSide({});
  };

  const rightDisabled = Object.keys(leftSide).every(
    (el) => leftSide[el] === false,
  );
  const leftDisabled = Object.keys(rightSide).every(
    (el) => rightSide[el] === false,
  );
  const onChecked = (key) => (str) => (e) => {
    const value = key === "left" ? leftSide : rightSide;
    const setter = key === "left" ? setLeftSide : setRightSide;

    console.log(key, str, value[str]);
    if (!value[str])
      setter((prev) => ({
        ...prev,
        [str]: true,
      }));
    else {
      setter((prev) => ({
        ...prev,
        [str]: false,
      }));
    }
  };

  const onLeftChecked = onChecked("left");
  const onRightChecked = onChecked("right");

  const motherTransfer = (key) => () => {
    const stateValue = key === "left" ? leftSide : rightSide;
    const setter = key === "left" ? setLeftSide : setRightSide;
    const otherSetter = key === "left" ? setRightSide : setLeftSide;
    const [toTransfer, toStay] = Object.keys(stateValue).reduce(
      (acc, curr) => {
        const val = stateValue[curr];
        if (val) {
          acc[0] = { ...acc[0], [curr]: val };
        } else {
          acc[1] = { ...acc[1], [curr]: val };
        }
        return acc;
      },
      [{}, {}],
    );

    setter(toStay);
    otherSetter((prev) => ({ ...prev, ...toTransfer }));
  };
  const onRightTransfer = motherTransfer("left");
  const onLeftTransfer = motherTransfer("right");

  return (
    <div>
      <div style={{ display: "flex", gap: "3rem" }}>
        <ul
          style={{ width: "6.5rem", display: "flex", flexDirection: "column" }}
        >
          {Object.keys(leftSide)?.map((el) => (
            <label key={el} htmlidfor={el}>
              <input
                id={el}
                type="checkbox"
                checked={leftSide[el]}
                onClick={onLeftChecked(el)}
              />{" "}
              {el}
            </label>
          ))}
        </ul>
        <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
          <button onClick={onAllLeft}>{"<<"}</button>
          <button disabled={leftDisabled} onClick={onLeftTransfer}>
            {"<"}
          </button>
          <button disabled={rightDisabled} onClick={onRightTransfer}>
            {">"}
          </button>
          <button onClick={onAllRight}>{">>"}</button>
        </div>
        <ul
          style={{ width: "6.5rem", display: "flex", flexDirection: "column" }}
        >
          {Object.keys(rightSide)?.map((el) => (
            <label key={el} htmlidfor={el}>
              <input
                id={el}
                type="checkbox"
                checked={rightSide[el]}
                onClick={onRightChecked(el)}
              />{" "}
              {el}
            </label>
          ))}
        </ul>
      </div>
    </div>
  );
}
