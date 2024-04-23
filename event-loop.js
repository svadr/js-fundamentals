
/**
 * The order should be
 * Task 1
 * Task 3
 * Microtask 1
 * Microtask 2
 * Task 2
 * 
 * Task 1 and Task 3 - console logs are part of JS core which they are going to be stored and executed 
 * first in the callstack
 * 
 * Then Microstask 1 and Microtask 2 are going to be executed next because they are WebAPIs 
 * WebApis (setTimeout, Promise, fetch, intersection observer)
 */
console.log("Task 1") // Task JS

function test() {
    Promise.resolve().then(() => {
        console.log('Microtask 3')
    });
}

setTimeout(() => { // Task WebAPI
    console.log("Task 2")
}, 0);

Promise.resolve().then(() => { // Microtask WebAPI
    console.log("Microtask 1")
});

test();

console.log("Task 3"); // Task JS

Promise.resolve().then(() => { // Microtask WebAPI
    console.log("Microtask 2");
})
