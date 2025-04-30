console.log("start")
// 1. Find the sum of the following series 1+2+3+.....+n terms. Where n = 10,
/* 
let n = 10;
let sum = 0;
term = 1;

for(let i = 1;i<=n; i++){
    sum = sum + term;
    term = term + 1;
}
console.log(sum); */


// 2. Find the sum of the following series 2+4+6+8+10+12.....+n terms. Where n = 10,

/* let n = 10;
let sum = 0;
term = 2;

for(let i = 1;i<=n; i++){
    sum = sum + term;
    term = term + 2;
    console.log(term,sum);
}
console.log(sum); */



// 3. Find the sum of the following series 1+x+x^2+x^3...+n^n terms. Where n = 5,x=2;

/* let n = 5;
let sum = 0;
term = 1;

for(let i = 1;i<=n; i++){
    sum = sum + term;
    term = 2 * term;
    console.log(term,sum);
}
console.log(sum); */


// 4. Find the sum of the following series 1-x+x^2-x^3...+n^n terms. Where n = 5,x=2;






/* 
5. write a bubble sort in javascript

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // Outer loop to iterate through the array
    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Inner loop to compare adjacent elements
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no elements were swapped in the inner loop, the array is sorted
        if (!swapped) break;
    }

    return arr;
}

// Example usage:
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(array));
*/