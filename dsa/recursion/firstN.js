const firstN = (n) =>{
  if(n===0) return 0
  return n + firstN(n-1)

} 

console.log(firstN(3))