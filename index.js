var Foo = class {
    constructor() {}
    bar() {
        return "Hello world";
    }
}

let objFoo = new Foo();
console.log(objFoo.bar());

var classC = class {
    constructor() {}
    lastname() {
        return "Aguilar";
    }
}

let objC = new classC();
console.log(objC.lastname());