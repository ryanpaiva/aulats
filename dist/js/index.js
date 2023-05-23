"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let num = 10;
num = 200;
console.log(num);
let x = 10;
x = 200;
let z = 12;
let firstName = "Ryan";
let age = 21;
const isAdmin = true;
console.log(typeof firstName);
firstName = "Paiva";
console.log(firstName);
const myNumber = [1, 2, 3, 4, 5];
console.log(myNumber);
console.log(myNumber.length);
console.log(firstName.toUpperCase());
myNumber.push(6);
console.log(myNumber);
let myTuple;
myTuple = [5, "test", ["test1", "test2", "test3"]];
const user = {
    name: "Ryan",
    age: 21
};
console.log(user);
console.log(user.name);
let a = 0;
a = 'test';
a = true;
a = [];
let id = "10";
id = 200;
const userId = 10;
const productId = "000001";
const shirtId = 123;
var size;
(function (size) {
    size["P"] = "Pequeno";
    size["M"] = "M\u00E9dio";
    size["G"] = "Grande";
})(size || (size = {}));
const shirt = {
    name: "Camisa manga curta",
    size: size.M
};
console.log(shirt);
let test;
test = "autenticado";
test = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHello(name) {
    return `Hello ${name}!`;
}
console.log(sayHello("Ryan"));
function logger(msg) {
    console.log(msg);
}
logger("teste");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("Ryan");
greeting("Joao", "Sir");
function sumNumber(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumber({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(10);
doSomething(true);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`IITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArraysItems(a1);
showArraysItems(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = age;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é: ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`O nome do usuário é: ${this.role}`);
            return;
        }
        console.log("Informação restrita");
    }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showbrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showbrand();
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showbrand();
function BaseParamters() {
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
    BaseParamters()
], Person);
const sam = new Person("Sam");
console.log(sam);
