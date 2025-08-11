class Solution {
    palindromeCheck(s) {
        //your code goes here
        let i=0, j=s.length-1;
        while(i<=j){
            if(s[i]=== s[j]){
                i++;
                j--;
            }else{
                return false
            }
        }
       
            return  true
    }
}