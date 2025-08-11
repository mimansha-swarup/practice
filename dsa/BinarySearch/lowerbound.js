

// const arr = [0,1,3,7,0,23,0,43,0,5,0,43]
// const mySplice(arr, i,1)=>
// // while (i<n){
// //   if(arr[i]===0){
// //     const zero = arr.splice(i,1)
// //     arr.push(zero[0])
// //   }
// //   i+=1;
// // }
// // for(let i = 0; i<arr.length; i+=1){
// //   for(let j = 0; j<arr.length-1; j+=1){


// //   }
// // }

// // arr.push(...zeros)

// console.log("arr",arr)
// const a = [12, 3, 4, 1, 6, 9].sort((a,b)=>a-b);
// // 1, 3, 4,6, 9, 12 
// const requiredSum = 24
// // op - 12, 3, 9
// console.log("a",a)

// for(let i = 0; i<a.length; i+=1){
//   let low  = i+1;
//   let high  = a.length-1;
//   while(low<high){
//     const sum = a[i]+a[low] + a[high]
//     console.log("sum",sum)
//     if(sum=== requiredSum){
//       console.log("output", a[i], a[low] , a[high])
//       break;
//     }
//     else if(sum > requiredSum){
//       high-=1;
//     }else{
//       low+=1
//     }
//   }

// }

// const obj1 = { name: "ronaldo" };
// const obj2 = obj1;
// obj2.name ="messi"
// console.log(obj1)


// const obj5 = { name: "jay", age: 30 };
// const obj6 = {};
// for (let i in obj5) {
//   obj6[i] = obj5[i];
// }
// console.log(obj5 == obj6); 
// console.log(obj5 === obj6);
// obj6.name = "manoj"
// // obj5.assign
// Object.assign(obj5,{"addres": "here"})
// console.log(obj5); 

// const sum = (keyName) =>(evaent) => Set(()=>{...prev, [keyName]:event})


// sumby2 = sum(2)

// sumBy2(6)
// sum(1)(2)(4)(6).........()  find sum of args, where lenght of args can be anything

// const sum = (a) => (b) =>{
//   if()
//   retun a+ b
// retun a + sum()
// }

// () =>{
//  document.cookie = `auth=${12323423}; `


// }

// 'use strict';
// var a = 1
// var b= 2
// var c= a+b



// console.log(c)


// <h1 className="cl" id="sadfas" ></h1>

// const objOriginal = {
//   age: 33,
//   a: null,
//   nestedObj: [
//     // could be a direct object as well(taken both edge cases)
//     {
//       name: "Sachin",
//     },
//     { age: 43 },
//   ],
// };
// const deepCopyFn   = (obj) =>{
//   if(typeof obj  !== 'object' || !obj){
//     return obj
//   }
//   const result = Array.isArray(obj) ? [] :{}

//   for (const key in obj) {
//     result[key] = deepCopyFn(obj[key])
//   }
//   return result

// }

// const objDuplicate = deepCopyFn(objOriginal);

// objDuplicate.nestedObj[0].name = "Sehwag";
// objDuplicate.age = 12;

// console.log(objOriginal, objDuplicate); 
