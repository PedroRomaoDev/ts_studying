"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
//declarar variavel == const/ let
x = 16;
console.log(x);
// inferencia x annotation
let y = 12; // inferencia
let z = 12; // annotation
// mesmo resultado
// tipos basicos
let firstName = "matheus";
const isAdmin = true;
//String != string
console.log(typeof firstName);
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName);
// tuplas
let myTuple;
//myTuple = [5, "pepe", ["a", "p"]];
//object literals -> {prop: value}
const user = {
    name: "pedro",
    age: 18,
};
console.log(user);
// any
let a = 0;
a = "teste";
a = [];
// union type
let id = "10";
id = 10;
const userId = 10;
const ProductId = "009";
//enum
//tamanho de roupas(size: médio, size: pequeno)
var size;
(function (size) {
    size["P"] = "pequeno";
    size["M"] = "medio";
    size["G"] = "grande";
})(size || (size = {}));
const camisa = {
    name: "camisa polo",
    size: size.G,
};
console.log(camisa);
//literal types
let teste;
//teste = "algumvalor";
//functions
function soma(a, b) {
    return a + b;
}
console.log(soma(12, 23));
function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello("matheus"));
function logger(msg) {
    console.log(msg);
}
logger("TESTE!");
function greeting(name, greet) {
    console.log(`Olá ${greet} ${name}`);
}
greeting("José");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multipleNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10,
};
console.log(multipleNumbers(someNumbers));
//narrowing
//checagem tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O numero é ${info}`);
        return;
    }
    console.log("Não foi passado um numero");
}
doSomething(5);
doSomething(true);
//generics
function showArrayItens(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArrayItens(a1);
showArrayItens(a2);
//classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.isApproved = isApproved;
        this.role = role;
    }
    showUserName() {
        console.log(`O nome do usuario é ${this.name}`);
    }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();
class car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new car("Volkswagen", 4);
fusca.showBrand();
//herança
class superCar extends car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new superCar("Audi", 4, 5.0);
console.log(a4);
//decorators
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
