/**
 * Hoisting
 * 
 * Allow to use functions and variables before being declared.
 */

// This will print undefined, since hello has not been initalized, only declared.
console.log(hello)

var hello = "hello2"

someFunc()

function someFunc() {
    var plop = "plop"
    console.log(plop)
}

console.log(foo)
var foo = function() {
    console.log("foo")
}