/*
Given two integer arrays nums1 and nums2. Both arrays are sorted in non-decreasing order.



Merge both the arrays into a single array sorted in non-decreasing order.

- The final sorted array should be stored inside the array nums1 and it should be done in-place.
- nums1 has a length of m + n, where the first m elements denote the elements of nums1 and rest are 0s.
- nums2 has a length of n.

Input: nums1 = [-5, -2, 4, 5], nums2 = [-3, 1, 8]
Output: [-5, -3, -2, 1, 4, 5, 8]
Explanation: The merged array is: [-5, -3, -2, 1, 4, 5, 8], where [-5, -2, 4, 5] are from nums1 and [-3, 1, 8] are from nums2

Input: nums1 = [0, 2, 7, 8], nums2 = [-7, -3, -1]
Output: [-7, -3, -1, 0, 2, 7, 8]
Explanation: The merged array is: [-7, -3, -1, 0, 2, 7, 8], where [0, 2, 7, 8] are from nums1 and [-7, -3, -1] are from nums2
*/

class Solution {
  merge(nums1, m, nums2, n) {
    const a = [];
    let i = 0,
      j = 0;
    while (i < m && j < n) {
      if (nums1[i] <= nums2[j]) {
        a.push(nums1[i]);
        i++;
      }
      if (nums1[i] > nums2[j]) {
        a.push(nums2[j]);
        j++;
      }
    }
    if (i === m && j < n) {
      a.push(...nums2.slice(j));
    }
    if (j === n && i < m) {
      a.push(...nums1.slice(i));
    }

    for (let i = 0; i < a.length; i++) {
      nums1[i] = a[i];
    }
    // nums1 =a
  }
}
