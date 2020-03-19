
/* Happens in React */
function fx() {
    return [10, 20, 30, function () { console.log("hi.....") }];
}

var [a, b, c, d] = fx();
console.log(a); // 10
console.log(b); // 20
console.log(c); //30 
d(); // 'hi.....'
