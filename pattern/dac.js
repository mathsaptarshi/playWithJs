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
binarySearch([2,3,4,5,6,7,8,9,10],80);