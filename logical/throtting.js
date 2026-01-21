
let getData = function(...arg) {
  console.log('Fetching data...',arg);
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
// getData();

let modgetdata = function throttle(func, delay) {
  let flag = true;
  return function() {
    let context = this, args = arguments;
    if (flag) { // Only execute if flag is true
      func.apply(context, args);
      flag = false; // Set flag to false immediately after execution
      setTimeout(() => {
        flag = true; // Reset flag after the delay
      }, delay);
    }
  }
};
const throttledGetData = modgetdata(getData, 5000); // Throttle getData with a 5-second delay