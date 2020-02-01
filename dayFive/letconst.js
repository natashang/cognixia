/*  ES6:

    var - global scoped variable
    let - block scoped variable
    const - once assigned, cannot change the value

*/

// block scoped variable
for (let i = 0; i < 5; i++) {
    console.log(i)
    var str="hello"
}

// var i --> i = 5
// let i --> undefined
// console.log(i)
console.log(str) // hello

const x = 'hello world';
//x = 'hi'
console.log(x) //x = 'hi'; TypeError: Assignment to constant 

let s = 'hello world';
console.log("text = " + s); // ES5: concatenation
console.log(`text = ${s}`)  // ES6: template string literal

