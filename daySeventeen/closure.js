var outside = 1
window.globalvar = 2

// closure
// IIFE: immediately instantiated function execution
(function() {
    function foo () {
        const sum = globalvar + outside
    }
})()
