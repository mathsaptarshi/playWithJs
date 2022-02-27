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

console.log("one")
setTimeout(()=>{
    console.log("one and half");
},100)
console.log("two");


//***********************PRIMITIVE VS NON PRIMITIVE**********/ 
// Q> what is diference between static typed language and dynamically typed language?
/* https://www.javascripttutorial.net/javascript-pass-by-value/ */
/* 
JavaScript provides six primitive types as undefined, null, boolean, number, string, and symbol , and a reference type object
*/
let a = 5
let b = a
b++

console.log(a)
console.log(b)

/* o/p - 
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

function turnOn(machine) {
    machine.isOn = true;
}
/* Non Primitive not mutable */
var computer = {
    isOn: false
};

turnOn(computer);
console.log(computer.isOn); // true;

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

// ***********************************Write a recursive function of countDown

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


/* *********Reverse a string using a JavaScript stack******** */

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