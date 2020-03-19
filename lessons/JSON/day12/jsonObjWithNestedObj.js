/* How to access nested JSON objects */

var myObj = {
    "name":"John",
    "age": 30,
    "cars": {
        "car1": "Ford",
        "car2": "BMW",
        "car3": "Honda"
    }
}

// Same output -- accessing values using dot method v. brackets
console.log(myObj.cars.car2)
console.log(myObj.cars["car2"])

myObj.cars.car3 = "Mercedes";
console.log("updated value: ", myObj.cars.car3)

// delete
delete myObj.cars.car1
console.log(myObj.cars)