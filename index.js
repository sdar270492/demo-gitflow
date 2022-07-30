var Foo = class {
    constructor() {}
    bar() {
        return "Hello world";
    }
}

let objFoo = new Foo();
console.log(objFoo.bar());

var classB = class { 
    constructor() {}
    name() {
        return "Sergio";
    }
}

let objB = new classB();
console.log(objB.name());