var classA = class {
    constructor() {}
    foobar() {
        return "Hello world";
    }
    lorem() {
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc";
    }
}

let objFoo = new classA();
console.log(objFoo.foobar());
console.log(objFoo.lorem());

var classB = class { 
    constructor() {}
    name() {
        return "Sergio";
    }
}

let objB = new classB();
console.log(objB.name());

var classC = class {
    constructor() {}
    lastname() {
        return "Aguilar";
    }
}

let objC = new classC();
console.log(objC.lastname());