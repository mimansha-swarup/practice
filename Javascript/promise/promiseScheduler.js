/**
 * create a method that take list of promises and n: number of promise to concurrently execute at once
 * Remember  at once no more than n promise shall be execute
 *  */

const promiseScheduler = (tasks, limit) => {
  let currIdx = 0;
  const results = [];

  const runTask = (index) => {
    return tasks[index]?.().then((res) => {
      results[index] = res;
      if (currIdx < tasks.length) {
        return runTask(currIdx++);
      }
    });
  };

  while (currIdx <= limit && currIdx <= tasks.length) {
    runner.push(runTask(currIdx++));
  }

  return Promise.all(results).then(() => results);
};
