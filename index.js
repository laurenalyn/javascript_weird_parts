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