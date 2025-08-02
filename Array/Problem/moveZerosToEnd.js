// Given an integer array nums, move all the 0's to the end of the array.
// The relative order of the other elements must remain the same.
// This must be done in place, without making a copy of the array.

const arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
let count = 0;

for (let i in arr) {
  if (arr[i] !== 0) {
    arr[count++] = arr[i];
  }
}

while (count < arr.length) {
  arr[count++] = 0;
}

/* optimal

class Solution {
    moveZeroes(nums) {
        let j =0;
        for(let i =0; i<nums.length; i++){
            if(nums[i]!== 0){
                [nums[i],nums[j]] = [nums[j],nums[i]]
                j++;
            }
        }
        
       
    }
}





*/

console.log("output: ", arr);
