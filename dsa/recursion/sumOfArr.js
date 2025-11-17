const arr = [3, 6, 7, 23, 6, 2];
const arrSum = (index) => {
  if (index === 0) {
    return arr[0];
  }
  return arr[index] + arrSum(index - 1);
};

console.log("sum of arr", arrSum(arr.length - 1));
