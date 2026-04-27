let arr = [5,4,4,3,2,3,4,5,6,8];

function insert(value,position){
  for(let i=arr.length-1;position<=i;i--){
    if(i>=position){
      arr[i+1] = arr[i];
      if(i==position){
        arr[i]= value
      }
    }
  }
}

function deleteElm(position){
  for(let i= 0;i<=arr.length-1;i++){
    if(i>=position){
      arr[i]=arr[i+1]
    }
  }
  arr.length = arr.length -1
  console.log(arr)
}

function maxProd(arr){
  // console.warn(arr.sort((a,b)=>b-a))
  sortedarr = arr.sort((a,b)=>b-a)
  return arr[0]*arr[1]
}

function unique(arr){
  let unique = new Set(arr);
  return [...unique]
}



insert(11,2);
deleteElm(2);
console.log(arr);
// console.log(maxProd(arr));
// console.log(unique(arr));