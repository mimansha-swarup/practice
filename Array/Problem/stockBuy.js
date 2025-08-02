const prices = [7,1,5,3,6,4];

let lowest = Infinity;
let max = 0;

for( el of prices ){
  if(el<lowest){
    lowest=el;
  }

  if(el  - lowest > max){
    max = el - lowest
  }
}

console.log("max", max)