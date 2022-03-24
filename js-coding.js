/* JavaScript-Equality-Table */
// https://dorey.github.io/JavaScript-Equality-Table/
'' == '0'      // => false
0 == ''        // => true
0 == '0'       // => true
false == ''    // => true


/* // About NaN // */

NaN             // NaN
typeof(NaN)     // "number"
'abc'/4         // NaN

NaN == 1        // false
NaN == false    // false
NaN == NaN      // false

isNaN(NaN)      // true
isNaN(1)        // false

typeof(null)    //'object' incorrect js it should be null
typeof(undefined)    //'undefined' incorrect js it should be null
// -------------------
var a;
typeof(a); //'undefined'

// ****************************************************

// ----------------------Web APIs--------------
console.log("one")
setTimeout(()=>{
console.log("one and half");
},1000)
console.log("two");

//***********************PRIMITIVE VS NON PRIMITIVE**********/ 
// Q> what is diference between static typed language and dynamically typed language?
/* https://www.javascripttutorial.net/javascript-pass-by-value/ */
/* 
JavaScript provides six 
primitive types as undefined, null, boolean, number, string, and symbol , and 
a reference type object;s
*/

// What is the output?
let a = 5
let b = a
b++

console.log(a)
console.log(b)

/* 
o/p - 
5
6
*/

let obj1 = {name:'test',password:'123'}
let obj2 = obj1;

obj2.password = 'easy'
console.log(obj1)
console.log(obj2)

/* op
{
name: "saptarshi"
password: "easy"
}
{
name: "saptarshi"
password: "easy"
}
*/

/* Primitive mutable */
function square(x) {
    x = x * x;
    return x;
}

var y = 10;
var result = square(y);
console.log(y); // 10 -- no change
console.log(result); // 100 

/* Non Primitive not mutable */
function turnOn(machine) {
    machine.isOn = true;
}

var computer = {
    isOn: false
};

turnOn(computer);
console.log(computer.isOn); 
// true;

// Scope issue
// var a = {flag:true};
// function fun(n){
//     a = {flag:false}
// }
// console.log(a);


var a = {flag:true};
function fun(n){
    n.flag = false
}
fun(a);
console.log(a);
// {flag: false}

var a = 10;
function fun(n){
    n = false
}
fun(a);
console.log(a);
// 10



// *****************************leakage of global variable

function ab(){
	height = 50;
	return height;
}
console.log(ab())
console.log(height)

/* op: 
50
50 */

// ********************************** Write a recursive function of countDown ********************

function countdown(n, result = []) {
    if (n < 1){
        return result;
    }
    else{
        result.push(n);
        return countdown(n - 1, result);
    }
}

console.log(countdown(5));



function countdown(n) {
    if (n < 1){
        return 0;
    }
    else{        
        console.log(n);
        return countdown(n - 1);
    }
}

console.log(countdown(5));
// output 654321


/*------------------------ Factorial-------------------- */

function factorial(x) {
    // if number is 0
    if (x == 0) {
        return 1;
    }
    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}
factorial(6)


/* ---------- Calculate the sum of digits of a number example---- */
/* 
f(324) = 4 + f(32)
f(32)  = 2 + f(3)
f(3)   = 3  + 0 (stop here)
*/

function sumOfDigits(num) {
    if (num == 0) {
        return 0;
    }
    return num % 10 + sumOfDigits(Math.floor(num / 10));
}

sumOfDigits(44);


/* ********* Reverse a string using a JavaScript stack******** */

function reverse(str) {
    let stack = [];
    // push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    // pop letter from the stack
    let reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}
console.log(reverse('JavaScript Stack')); //kcatS tpircSavaJ





// *******************************************************************************JS Advance**************************************************************************************

// 1. What is strict mode operating context?

"use strict";
var theVal = 0;
thVal = 1;
if(theVal > 0){
    console.log("Hello")
}
// Uncaught ReferenceError: thVal is not defined

// Rest and spread operator__________________

// What is the output?
function sum(a,b){
    // console.log(arguments)
    return a+b;
}
sum(1);
// NaN ----- issue in addition
sum(1,2,3,4);
// 3

function sum(){
    var total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
sum(1,2,3,4)
/* arguments looks like an array but not exact an array */
/* Best approach using rest operator */
function sumrop(...arg){
    let total = 0;
    for(let i=0;i<arg.length;i++){
        total += arg[i]
    }
return total;
}
sumrop(1,2,3,4)

// -------------------------------------------------
// What is he outpur?
var arr1 = [4,5,6];
var arr2 = [4,5,6,...arr1];
var arr3 = [4,5,6,arr1];
console.log(arr2) //[4, 5, 6, 4, 5, 6]
console.log(arr3) //[4, 5, 6, Array(3)]

// ------------------------------------------------

// Q> What is variable hoisting?
// -------------
var a;
console.log(a); //undefined
a = 1;
// -------------
fun1();
function fun1(){
    let z= 555;
    console.log(z) //555
}
// -------------
fun2();
var fun2 = function() {
    let x = 555;
    console.log(x)
}
// Uncaught TypeError: fun2 is not a function


// Q> What is the scope chain?





// All JavaScript objects inherit properties and methods from a prototype.
function Person(first, last, age, eyecolor) {
    console.log(this)
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");


//   Write a function in js that will take two parameters. One is object and another is a property. The task is to strip the property from the object and return the final object

function stripProperty(obj, prop){
    var x;
    for(x in obj){
        if(x === prop){
            delete obj[x];
        }
    }
    return obj;
}

let obj = {
    name: "Saptarshi",
    age: 28
};
stripProperty(obj,"age")

// hoisting
function abc(){
    console.log(a);

    var a = 10
}
abc();
// undefined
// Now

function abc(){
    console.log(a);
    console.log(b);
    console.log(c);

    var a = 10;
    let b = 20;
    let c = 30;
}
abc();
// VM93:2 Uncaught ReferenceError: Cannot access 'b' before initialization
// b anc c are initilize in temporary dead zone(variables are in scope but they are not declared)
// *********************************************************
// Q> What is Implicit and Explicit binding?

var obj = {
    name: "Saptarshi",
    display :  function() {
        console.log(this,this.name)    
    },
};

var obj1 = {
    name: "ABC"
}

obj.display();//Saptarshi
obj.display.call(obj1)//ABC

/* Now if display be an arrow function */

var obj = {
    name: "Saptarshi",
    display :  () => {
        console.log(this,this.name)    
    },
};

var obj1 = {
    name: "ABC"
}

obj.display();//Saptarshi
obj.display.call(obj1)//ABC

/* Arrow function pointing to the Global object and there are no name prop so its return "" */


function lcm_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
     return false;
   return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
 }
 
 function gcd_more_than_two_numbers(input) {
    if (toString.call(input) !== "[object Array]")  
          return  false;  
    var len, a, b;
      len = input.length;
      if ( !len ) {
          return null;
      }
      a = input[ 0 ];
      for ( var i = 1; i < len; i++ ) {
          b = input[ i ];
          a = gcd_two_numbers( a, b );
      }
      return a;
  }
  
  function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  console.log(gcd_more_than_two_numbers([3,15,27]));
  console.log(gcd_more_than_two_numbers([5,10,15,25]));
 console.log(lcm_two_numbers(3,15));
 console.log(gcd_two_numbers(4,15));


 // program to display the sum of natural numbers

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);