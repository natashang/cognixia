
var topics = ["React", "HTML", "CSS", "JS", "Angular"];

var longest = "";
var longestLength = 0;
for (var t of topics) {
    if (t.length > longestLength) {
        longest = t;
        longestLength = t.length;
    }
}
console.log(longest + ", length " + longestLength)

// --------------------
var longest = "";
for (var t of topics) {
    if (t.length > longest.length)
        longest = t;

}
console.log(longest + ", length " + longest.length )

// ----------------
var str = "Hello World!";

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.indexOf('W'))
console.log(str.slice(0, 4) )
console.log(str.replace('l', 'L'))
console.log(str.lastIndexOf('l') )

var x = "3+3";
console.log(x );
console.log(eval(x));
