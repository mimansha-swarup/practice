const arr = [2, 1, 3, 4, 5, 5, 8, 3];
const val = 3;
// using 2 pointer
const removeElement = (nums, val) => {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      arr[x] = arr[i];
      x++;
    }
  }
  nums.length = x;

  console.log(nums, x);

  return nums;
};

removeElement(arr, val);
