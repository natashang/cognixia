
function add(a, b) {
    let pro = new Promise((resolve, reject) => {
        if (a < 0 || b < 0)
            reject("Invalid numbers....");

        else
            resolve(a + b);

    });
    return pro;
}

// ES7
async function test() {
    let res = await add(10, 20);
    console.log(res);
}


test();
