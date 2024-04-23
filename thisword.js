const obj = {
    name: 'John',
    printName() {
        console.log(this.name)
    }
}

obj.printName(); // what we will see here

const printName = obj.printName;

printName(); // what we will see here

// One way to resolve this is to bind the context
const printName2 = obj.printName.bind(obj)
printName2()

// Or we can use call/apply and call the function with the correct context
printName.apply(obj)