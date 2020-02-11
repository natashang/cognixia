
/* Parse nested JSON data in JavaScript */ 

var json={
    "book": {
        "name":"Harry Potter and the Philosopher's Stone",
        "author":"J.K. Rowling",
        "year":2000,
        "characters": [
            "Harry Potter",
            "Hermione Granger",
            "Ron Weasley"
        ],
        "genre": "fantasy fiction",
        "price": {
            "paperback": "$10.40",
            "hardcover": "$20.32",
            "kindle": "$4.11"
        }
    }
};

function printValues(obj) {
    for (var key in obj.book) {
        console.log("key:", obj.book[key])
    }
}

printValues(json)
