
var nums;
nums = [1, 2, 44, 52, 25, 6, 4, 2];

for (var i = 0; i < nums.length; i++) {
    console.log("<h3>" + nums[i] + "</h3>");
}
document.write("<hr />")
for (var n of nums) {
    console.log("<h3>" + n + "</h3>");
}

