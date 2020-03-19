

/*
let add = (a, b, cb) => cb(a+b);
add(10, 20, (res) => {
    alert(res);
})
*/



/*
    A Promise object is used to handle callback hell
    the Promise object takes two conditions
    call resolve: successful condition
    call reject: error
*/
function add(a, b) {
    let pro = new Promise((resolve, reject) => {
        if (a < 0 || b < 0)
            reject("Invalid numbers....");

        else
            resolve(a + b);

    });
    return pro;
}

/*
    Instead of having a callback function in the toUpc. declaration,
    the callback is used in the function call

    .then() is a Promise object's function, acts on the Promise output
    Like the Promise object declaration, two actions
    (res) for resolve() success
    (err) for reject() error
*/

/*
    Trap. alert(x) is called before x=res b/c asynchronous
    alert(x): undefined
*/
var x;
add(10, 20).then(
    function (res) {
        //alert(res);
        x = res;
    },
    function (err) {
        console.log(err);
    });
//alert(x);

setTimeout(() => {
    console.log(x)
}, 2000);

/*
    Proving that the Promise is asynchronous, non-blocking and
    not waiting for the result. 
    'hiiiii' is finished first (synchronous) 
    and then we see the add sum '30'
*/
console.log("hiiiiiiiiiiiii");

let toUp = (str) => {
    let p = new Promise((resolve, reject) => {
        resolve(str.toUpperCase());
    });
    return p;
};

toUp("alphabet").then((res) => {
    console.log(res);
});

