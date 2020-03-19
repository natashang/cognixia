
var score = [10, 34, 56, 7, 3, 4];
var temp = 0;
for (var s of score) {
    if (temp < s)
        temp = s;

}
console.log(temp);
