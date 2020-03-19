
// reference to another function
function fx(param) {
    param();
}

fx(function () {
    console.log("hiiiiiii");
});

function fy(param1, param2) {
    param1();
    param2();
}

fy(function () {
    console.log("hello");
}, function () {
    console.log("hey");
});
