/* Access an array value of a JSON object */

var myObj, x;
myObj = {
    "name":"John",
    "age": 33,
    "cars": [
        "Ford",
        "BNW",
        "Ferrari"
    ]
}

x = myObj.cars[1];
console.log("x: ", x)