

/*         // synchronous call, the browser will wait for user to click "ok" and then proceed to next line immediately
        alert("1");
        alert("2");
        var x = prompt("enter a value");
        aleart("hi there!"); */

function add(a, b) {
    return a + b;
}

// add() has been called and the value assigned to x,
// but now waiting for variable x to be used
var x = add(10, 20);

// synchronous
// blocking, waits until user clicks "ok" to release from block
alert(x);

// synchronous
// blocking, waits until user clicks "ok" to release from block
alert("hi");

console.log("<h1>Asynchronous</h1>");
