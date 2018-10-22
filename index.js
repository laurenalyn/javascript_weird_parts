// console.log("test");

// function b() {
//     console.log('Called b!');
// }

// b();

// console.log(a);

// var a = 'Hello World!';

// console.log(a);



// execution stack

function b() {
    var d;
}
function a() {
    b();
    var c;
}
a();
var d;

// even though a is defined below b once function a is envoked function b will then run.
// we have global execution stack, then the a() stack, then b()stack once b is complete it will "pop" off the stack
// returning us to complete a

