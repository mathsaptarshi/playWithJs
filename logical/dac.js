/* Merge sort */


function divide(collection){
  if(collection.length<2){
    return collection;
  }
  else{
    let midpoint = Math.floor(collection.length / 2);
    let left = collection.slice(0,midpoint);
    let right = collection.slice(midpoint, collection.length);
    console.log("Left subproblems::",left);
    console.log("Right subproblems::",right);
    let leftArr = divide(left);
    let rightArr = divide(right);

    return merge(leftArr,rightArr)
  }
}

function merge(leftArr,rightArr){
  console.log("Merging subproblems::",leftArr,rightArr);
  let sorted = [];
  while(leftArr.length > 0 && rightArr.length > 0){
    console.log("Compapring first element of leftArr and rightArr::",leftArr,rightArr);
    if(leftArr[0] < rightArr[0]){
      let data = leftArr.shift();
      console.log("Pushing Data::",data);
      console.log("Remaining left array::",leftArr);
      sorted.push(data);
    }
    else{
      let data = rightArr.shift();
      console.log("Pushing Data::",data);
      console.log("Remaining left array::",leftArr);
      sorted.push(data);
    }
  }
  console.log("Sorted Arr::",sorted.concat(leftArr).concat(rightArr))
  return sorted.concat(leftArr).concat(rightArr);
}

divide([9,1,4,7,2,8,3,6,5])



/* binary search always work on sorted array */
function binarySearch(numbers,elements){
  let midpoint = Math.floor(numbers.length / 2)
  if(numbers[midpoint]==elements){
    return true;
  }
  else if(numbers[midpoint]>elements){
    left = numbers.slice(0,midpoint);
    console.log("left",left)
    return binarySearch(left,elements);
  }
  else if(numbers[midpoint]<elements){
    right = numbers.slice(midpoint+1,numbers.length);
    console.log("right",right)
    return binarySearch(right,elements)
  }
}
binarySearch([2,3,4,5,6,7,8,9,10],8);


