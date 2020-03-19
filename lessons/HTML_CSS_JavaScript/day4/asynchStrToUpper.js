

// Asynchronous
function f(str, callback) {
    setTimeout(function () {
        callback(str.toUpperCase());
    }, 2000);
}

f('javascript', function (str) {
    console.log(str)
});

console.log("hi");

