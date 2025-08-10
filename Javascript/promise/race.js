/**

it returns a promise it resolves or reject as soon asone of promise is resolved or rejected

*/

const any = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve, reject).catch(reject);
    });
  });
};
