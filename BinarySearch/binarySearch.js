// Implement Binary search 
const list = [1, 2, 3, 5, 7, 9, 12, 15, 17];

const binarySearch = (arr, num) => {
  let low = 0, high = arr.length - 1;
  let mid = Math.floor((low + high) / 2)
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    // console.log("low", low, mid, high)
    if (arr[mid] === num) {
      return mid;
    }
    else if (arr[mid] > num) {
      high = mid - 1
    }
    else if (arr[mid] < num) {
      low = mid + 1
    }
  }
  return -1;
}

console.log("index", binarySearch(list, 12))
