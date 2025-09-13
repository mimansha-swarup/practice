// remove duplicate in sorted array
const arr = [0, 0, 2, 2, 2, 3, 3, 4, 5, 6, 7, 7, 8];

// usig 2 pointers
const removeDuplicate = (nums) => {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  x += 1;
  nums.length = x;

  console.log(nums);

  return nums;
};

removeDuplicate(arr);
