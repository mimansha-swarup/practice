/**
 * Given an array of integers (positive, negative, or zero),
Find the contiguous subarray (one block of consecutive elements) that has the maximum possible sum,
and return that sum.
 * 
 */
const arr = [5, 4, -1, 7, 8];
// comment  are to extract subarray with max sum
let MAX = -Infinity;
let sum = 0;

for (el of arr) {
  //use index
  // if sum 0 assign variable start as i
  sum += el;
  if (sum > MAX) {
    MAX = sum;
    // update ansStart variable with start and  ansEnd varaible with i
  }
  if (sum < 0) {
    sum = 0;
  }
}
console.log("output:", MAX);
