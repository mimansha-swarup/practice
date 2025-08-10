/*
- take array of promises and and returns a promise that resolves when  all the promises are resolved or 
else return first error
*/

const all = (promises) => {
  const n = promises.length;
  let completed = 0;
  const results = -[];
  return Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((val) => {
          results[index] = val;
          completed++;
          if (completed === n) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};
