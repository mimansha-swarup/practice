const arr = [1, 2, 3, 4, 5, 6, 7]
const d= 2


// const subArray = arr.splice(0,d)
// arr.push(...subArray)

// console.log("output:", arr)

const firstPart = []
const secondPart = []

let i = 0
while(i<d){
  firstPart[i] = arr[i]
  i+=1;
}
while(i<arr.length){
  secondPart.push(arr[i])
  i+=1;
}

console.log("output", [...secondPart,...firstPart])
