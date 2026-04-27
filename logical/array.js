let arr = [5,4,4,3,2,3,4,5,5,6,8];

function maxProd(arr){
  // console.warn(arr.sort((a,b)=>b-a))
  sortedarr = arr.sort((a,b)=>b-a)
  return arr[0]*arr[1]
}

function unique(arr){
  let unique = new Set(arr);
  return [...unique]
}

console.log(arr);
// console.log(maxProd(arr));
// console.log(unique(arr));