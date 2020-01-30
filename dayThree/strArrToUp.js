
// call by reference
function strArrToUp(arr) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
    console.log(arr);
}

var topics = ["rEAct", "htmL", "cSs", "Js", "anGuLAr"];
strArrToUp(topics);
