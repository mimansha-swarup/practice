class Solution {
    intersectionArray(nums1, nums2) {
        const arr=[]
        let i =0, j=0;
        while(i<=j){
            if(nums1[i] === nums2[j]){
                arr.push(nums1[i])
                i++;
                j++;
                continue;
            }

            if(nums1[i] > nums2[j]){
                j++;
                continue;
            }
            if(nums1[i] < nums2[j]){
                i++;
                continue;
            }
        }
        return arr

    }
}