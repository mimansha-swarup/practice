const isPowerOfTwo = (n) => {
  if (n === 1) return true;
  if (n % 2 !== 0) {
    return false;
  }
  return isPowerOfTwo(n / 2);
};

console.log("is power of 2", isPowerOfTwo(16));
