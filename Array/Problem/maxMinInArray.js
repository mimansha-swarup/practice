class Solution {
    getMinMax(arr) {
        // code here
        let max = arr[0] , min=arr[0]
        arr.forEach(el =>{
            if(el>= max){
                max = el
            }
            if(el<min){
                min = el
            }
        })
        
        return [min,  max]
        
    }
}