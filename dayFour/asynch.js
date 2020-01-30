
// cb: callback, the cb parameter is a reference to a function
// the asynchronous happens because cb(sum) -- waiting for reference to cb() function
// with local scope value sum variable
function add(a, b, cb) {

    // time for 3 seconds before executing this block
    // non-blocking: "hi there" is executed first and then this block and alert from cb()
    setTimeout(function () {
        var sum = a + b;
        cb(sum);
    }, 3000);
}

add(100, 200, function (res) {
    console.log('sum = ' + res);
});

console.log("hi there");


