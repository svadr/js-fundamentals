/**
 * Promises in JS are objects that represent the eventual completion or failure of an asynchronous operation
 * It allows you to write async code in a more synchronous-like manner.
 */

// 1 - Basic promises
const foo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Foo completed successfully')
    }, 1000)
})

foo.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})

// 2 - Chaining Promises
const baz = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Baz operation completed")
    })
})

baz.then(res => {
    console.log(res)
    return "Second baz operation completed"
}).then(res => {
    console.log(res)
})

// 3 - Promise all
const promiseOne = new Promise(resolve => setTimeout(resolve, 1000, "First"))
const promiseTwo = new Promise(resolve => setTimeout(resolve, 2000, "Second"))
const promiseThree = new Promise(resolve => setTimeout(resolve, 3000, "Third"))

Promise.all([promiseOne, promiseTwo, promiseThree]).then(values => {
    console.log(values)
})

const promiseFoo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo")
    }, 1000)
})

const promiseBar = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("bar")
    }, 2000)
})

Promise.all([promiseFoo, promiseBar]).then(values => {
    console.log(values)
})

// 4 - Promise race
const promiseRaceOne = new Promise((resolve) => setTimeout(resolve, 1000, "promiseRaceOne"))
const promiseRaceTwo = new Promise((_, reject) => setTimeout(reject, 500, "promiseRaceTwo"))

Promise.race([promiseRaceOne, promiseRaceTwo]).then(result => {
    console.log(result)
}).catch(err => {
    console.log(err)
})

// 5 - Catch errors!
const foobarBaz = new Promise(reject => setTimeout(reject, 1000, "Error ocurred!"))

foobarBaz.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})

const foobarBazFoo = new Promise(reject => setTimeout(reject, 2000, "Another error with try!"))

try {
    foobarBazFoo.then(res => console.log(res))
} catch(err) {
    console.log(err)
}