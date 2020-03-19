// ES6 spread operator

/* let score = [1, 3, 4, 5, 7, 9];

// in-place expansion using "..." as the spread (rest?) parameter
let nscore = [...score, 4, 5, 6]; 
*/
/*
    [
        1, 3, 4, 5, 7,
        9, 4, 5, 6
    ]
*/
 
var spread = () => {
    let score = [1, 3, 4, 5, 7, 9];

    let nscore = [...score, 4, 5, 6]; 
    console.log(nscore)
    
}
spread();

// ES6 rest operator
// example function call: 
let add = (...n) => {
    let sum = 0;
    for (let i of n) {
        sum += i;
    }
    console.log(sum)
};
add(10, 20, 30, 40, 50); // 150
