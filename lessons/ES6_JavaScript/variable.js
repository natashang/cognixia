// when outside of a function these two behave the same
window.globalvar = 2
var thisisalsoglobal =1

function fun() {
    // function specific declaration, would not be accessible outside of this function
    var thisisoutside = {}

    if (true) {

        // block specific declaration, would not be access outside of this if block
        let thisisinside = {

        }
        const thisisinside={

        }
    }
}