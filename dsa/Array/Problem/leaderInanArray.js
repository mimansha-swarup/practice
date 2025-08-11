const arr = [16, 17, 4, 3];

let maxLast = arr[arr.length - 1];
const maxSubArray = [maxLast];

for (let i = arr.length - 2; i >= 0; i--) {
  if (maxLast < arr[i]) {
    maxLast = arr[i];
    maxSubArray.push(maxLast);
  }
}

console.log("output:", maxSubArray);
