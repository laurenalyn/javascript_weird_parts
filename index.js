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



/* =========================================================
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


=========================================================*/

/* =========================================================

// Operator Precedence and Associativity:
// operator precedence: which operator function gets called first
// -functions are called in order of precedence (HIGHER precedence wins)
// operator associativity: what oreder operator functions get clled in: left-to-right or right-to-left
// -when function have the SAME precenence

var a = 3 + 4 * 5; //4*5 runs first then adds 3 = 23   multiplication has the HIGHER precedence 
console.log(a); // 23
// associativity
var e = (3 + 4)* 5; // runs what is inside th () first due to higher precedence
console.log(e); // 35
var b = 2, c = 3, d = 4;
b = c = d;
console.log(b); // 4
console.log(c); // 4
console.log(d);// 4
// we are using the = operator which is a right - to -left associativity
=========================================================*/

/*=========================================================
//Coercion:
//converting a vaue from one type to another - this happens quite often in JS b/c its dynmically typed
var a = 1 + 2;
console.log(a); // 3
var b = 'hello' + 'world';
console.log(b); // hello world
var c = 1 + '2';
console.log(c); // 12
// the first value was coerced into a string value

=========================================================*/

/*=========================================================
//Comparison Operators:
//console.log(1 < 2 < 3); //true
//console.log(3 < 2 < 1); // true - due to precedence it runs from left to right. it evaluates 3 < 2 and gets "false" false turns into a 0. then it evaluates 0 < 1 giving a "true"

//== equality
//!= inequality
//=== strict equality compares 2 things but doesnt try to coerce the values
//!== strict inequality
// 3 == 3 // true
// "3" == "3" // true
// "3" == 3 //true - due to coersion

// 3 === 3 //true
// "3" === "3" //true
// "3" === 3 //false

var a = 0;
var b = false;
if (a == b) {
    console.log('They are equal');
} else {
    console.log('Nope, not equal');
}
// 'they are equal'

var c = 0;
var d= false;
if (c === d) {
    console.log('They are equal');
} else {
    console.log('Nope, not equal');
}
// 'nope, not equal'
=========================================================*/

/*=========================================================
//Existence and Booleans:
var a;
// goes out to internet & looks for a value
//a = 'true'
//a = 0;

if (a || a === 0) {
    console.log('Something is there.');
}
//if a is undefined you dont see a console log
//if a is set to "true" you get a console log
//if a is a 0 you dont see a console log because 0 coerces to "false" so we added an || (or) to see if it is equal to 0;

//with the || operator it will take see which side has precedence and the === has precedence
//so js compares a === 0 which comes back "true" 
//leaving us with a || true       a = 0 giving us "false"
//so we are comparing (false || true)
//if either are true the result is true
=========================================================*/

//=========================================================
//Default Values:
function greet(name) {
    name = name || '<Your name here>'; //default value
    console.log('Hello ' + name);
}
greet('Tony');   //Hello Tony
greet();    //Hello undefined - the + operator coerced the undefined parameter to the string undefined
            // called again after adding the default value and we get Hello <Your name here>
//=========================================================*/