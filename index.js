// console.log("test");

// function b() {
//     console.log('Called b!');
// }

// b();

// console.log(a);

// var a = 'Hello World!';

// console.log(a);



// execution stack
/*
function b() {
    var d;
}
function a() {
    b();
    var c;
}
a();
var d;

even though a is defined below b once function a is envoked function b will then run.
we have global execution stack, then the a() stack, then b()stack once b is complete it will "pop" off the stack
returning us to complete a
*/


// functions, context, and variable environment
// variable environment (where they are and how they relate to each other in memory)
/* function b() {
    var myVar;
    console.log(myVar);
}
function a() {
    var myVar = 2;
    console.log(myVar);
    b();
}
var myVar = 1;
console.log(myVar);
a();
console.log(myVar);
// what will myVar be at any given point?
// 1, 2, undefined
*/

// The Scope Chain
/*
function b() {
    console.log(myVar);
}
function a() {
    // var myVar = 2;
    b();
}
var myVar =1;
a();
//console logs: 1
// in this instance b is getting its myVarvalue from its outer environment reference
// which is globally
*/

/*
function a() {
    function b() {
        console.log(myVar);
    }
    var myVar = 2;
    b();
}
var myVar =1;
a();
// moved function b LEXICALLY inside of function a
// console logs: 2 
// since b was sitting inside of a its outer reference is now 2 since myvar = 2 inside of a
*/

// Scope, ES6, AND let
// -scope: where a variable is available in your code and if its truly the same variable or a new copy
// - let : a new way to declare a variable 
/*
if (a > b) {
    let c = true;
}
*/



/* =========================================================
// asynchronous: more than one at a time
// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}
        
function clickHandler() {
    console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');
// page takes 3 seconds to run the function waitThreeSeconds
// console logs: (when not clicking on screen )finished function, finished execution
// console logs: (when clicking while funcion is running) finished function, finished execution, click event!
// it puts the click event in the 'que' and runs the 'que' once the execution stack is complete
// javascript "watches" the que periodiodically
========================================================= */


/*=========================================================

Dynamic Typing - you dont tell the engine what type of data a variable holds
it figures it out while your code is running    - variables can hold diffrent
types of vaues because its all figured out during execution
ex: var isNew = true; // no error
    isNew = 'yup'; // no error
    isNew = 1; // no error

    Static Typing - you have to tell the engine what type of data it holds
ex:   bool isNew = 'hello' // an error - it has to hold a boolean value
s
=========================================================*/

/*=========================================================

Primitive Type:
a type of data that represents a single value
    - that is, not an object
1. undefined - represents lack of existence *never set a variable to this*
2. null - represents lack of existence
3. boolean - true or false
4. number - floating point # ( there's alwasy some decimals) Unlike other 
programming languages, theres only one 'number' type and it can make math weird
5. string - sequence of characters (bother "" and '' can be used)
6. symbol - used in ES6

=========================================================*/



// =========================================================
// Operators: a special function that is syntactically (written) differently
// generally, operators take two parameters and return one result


var a = 3 + 4; // addition operator
console.log(a); // 7
var b = 4 - 3; // subtraction operator
console.log(b); // 1
var c = 4 > 3; //  greater than operator -- returns a boolean value
console.log(c); // true
var d = 4 < 3; // less than operator
console.log(d); // false


// =========================================================*/

/*=========================================================





=========================================================*/

/*=========================================================





=========================================================*/