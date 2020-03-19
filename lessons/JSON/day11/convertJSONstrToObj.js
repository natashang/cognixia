// store JSON data in a JS variable
var data='{"name":"john", "age": 31, "city":"New York"}'

// convert JSON-encoded string to JS object
var obj = JSON.parse(data)

// access individual values from JS object
console.log(obj.name)
console.log(obj.age )
console.log(obj.city)
    