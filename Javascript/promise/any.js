/* 
it take array of promise 
returns a promise that resolved as soon as single promise is resolved from array
if all promise gets rejected  returns an array with aggregated error
*/

const any = (promises) => {
  const n = promises.length;
  const failed = 0;
  const failedArr = [];

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then(resolve).catch((err) => {
        failedArr[index] = err;
        failed++;
        if (failed === n) {
          reject(failedArr);
        }
      });
    });
  });
};
