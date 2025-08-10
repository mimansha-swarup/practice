/*
if takes array of promises
and returns an array in similar manner once all promises are resolved or rejected with the status

*/

const myAllSettled = (promiseArr) => {
  const mappedPromise = promiseArr.map((element, index) => {
    Promise.resolve(element).then(
      (res) => ({ status: "resolved", value: res }),
      (error) => ({ status: "reject", reason: error })
    );
  });

  return Promise.all(mappedPromise);
};
