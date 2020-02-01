// ES7

/*
    Returns a Promise
*/
async function add(a, b) {
    if (a < 0 || b < 0)
        throw new Error('Invalid Number');
    else
        return a + b;
}

async function test() {
    try {
        let res = await add( 10, 20);
        // console.log(typeof (res)) // number
        console.log(res);
    } catch (err) {
        console.log(err); // prints: 'Invalid Number'
    }

}


test();
console.log('lllllllll')