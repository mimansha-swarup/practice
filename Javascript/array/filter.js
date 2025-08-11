const filter = (arr = [], fn) => {
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      ans.push(arr[i]);
    }
  }

  return ans;
};
