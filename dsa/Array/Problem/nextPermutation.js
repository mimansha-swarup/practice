/*
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.



For example, for arr = [1,2,3], the following are all the permutations of arr:

[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1].



The next permutation of an array of integers is the next lexicographically greater permutation of its integers.

More formally, if all the permutations of the array are sorted in lexicographical order, 
then the next permutation of that array is the permutation that follows it in the sorted order.



If such arrangement is not possible (i.e., the array is the last permutation),
then rearrange it to the lowest possible order (i.e., sorted in ascending order).



You must rearrange the numbers in-place and use only constant extra memory.

*/
function nextPermutation(nums) {
  let n = nums.length; // Size of the given array

  // To store the index of the first smaller element from right
  let ind = -1;

  // Find the first index from the end where nums[i] < nums[i+1]
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      ind = i;
      break;
    }
  }

  /* If no such index exists, array is in descending order
           So, reverse it to get the smallest permutation */
  if (ind === -1) {
    nums.reverse();
    return;
  }

  // Find the element just greater than nums[ind] from the end
  for (let i = n - 1; i > ind; i--) {
    if (nums[i] > nums[ind]) {
      [nums[i], nums[ind]] = [nums[ind], nums[i]]; // Swap with nums[ind]
      break;
    }
  }

  // Reverse the right half to get the next smallest permutation
  let left = ind + 1,
    right = n - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  return;
}
