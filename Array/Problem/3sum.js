const arr = [12, 3, 4,1,6,9].sort((a,b)=>a-b);
const requiredSum = 24;

for (let i = 0; i < arr.length; i++) {
  let low = i+1;  
  let high = arr.length -1;  
  while(low<high){
    const sum = arr[i] + arr[low] + arr[high];
    if(sum === requiredSum){
      console.log("output:",arr[i], arr[low], arr[high] );
      break;
    }
    else if(sum < requiredSum){
      low+=1
    }else{
      high-=1
    }
  }
}