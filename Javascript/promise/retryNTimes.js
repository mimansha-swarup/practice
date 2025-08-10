const sleep = async (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
const retryNTimes = async (fn, repeat, delay, finalError) => {
  try {
    await fn();
    return;
  } catch (error) {
    if (repeat <= 0) {
      console.log(finalError);
      return;
    }
    console.log("Failed times -", repeat);

    await sleep(delay);

    return retryNTimes(fn, repeat - 1, delay, finalError);
  }
};
