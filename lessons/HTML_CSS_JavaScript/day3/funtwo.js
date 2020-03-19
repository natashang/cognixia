
function toUp(arr) {
    arr.push('css');
}

function caller() {
    var tp = ['react', 'html'];
    console.log(tp);
    toUp(tp);

    // react, html, css --> arr.push returns an object
    console.log(tp);
}

caller();
