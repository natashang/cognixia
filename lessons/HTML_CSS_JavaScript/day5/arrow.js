// ES6

function add(a, b) {
    return a + b;
}

// the arrow function does not have the keyword 'this'
// in ES5, 'this' will refer to the class or function

// if only one statement in the function, can remove the {} and return keyword
var addx = (a, b) => a+b;

// if only one parameter, can remove the () 
var squarex = a => a*a;

console.log(add(10, 20));
console.log(addx(10, 20));
console.log(squarex(10));