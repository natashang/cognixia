// self-invoking function
// when outer function is called, innner function is invoked
var count = (function() {
    var counter = 0;
    return function() {
        counter += 1;
        console.log(counter);
        return counter;
    }
})();

count();
count();
count();



// Javascript closure (?)
// returns a reference to a function
// preserves the value that was passed into it
function adder(x) {
    return function(y) {
        return x + y;
    }
}

var add5 = adder(5);
console.log(add5(7)) // 12
console.log(add5(8)) // 13
console.log(add5(5)) // 10


var myArr = [1, 2, 53, 54, 2 ,4];
var myObj = {x: 1, y:3, z: 4, q: 5};

let {x, y, z} = myObj;
console.log(y);

/*
    i: x
    i: y
    i: z
    i: q
*/
for (let i in myObj) {
    console.log(`i: ${i}`);
}


/*
    i: 0
    i: 1
    i: 2
    i: 3
    i: 4
    i: 5
*/
for (let i in myArr) {
    console.log("i in myArr: " + i);
}