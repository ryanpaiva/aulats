//string, number, boolean...
let num: number = 10

num = 200

console.log(num);

//inferencia x annotations

let x = 10;
// x = 'test'

x = 200;

let z: number = 12

//tipo básicos
let firstName: string = "Ryan"
let age: number = 21
const isAdmin: boolean = true

// String != string
console.log(typeof firstName);

firstName = "Paiva"

console.log(firstName)

// object
const myNumber: number[] = [1, 2, 3, 4, 5]

console.log(myNumber)
console.log(myNumber.length)
//console.log(mynumber.toUpperCase());
console.log(firstName.toUpperCase());
myNumber.push(6)

console.log(myNumber);

// tuples
let myTuple: [number, string, string[]]
myTuple = [5, "test", ["test1", "test2", "test3"]]

//myTuple = [true, false, true]

// object literals -> {prop: value}
const user: { name: string, age: number } = {
    name: "Ryan",
    age: 21
};

console.log(user);

console.log(user.name);

//any
let a: any = 0

a = 'test'
a = true
a = []

// solution for any 
//union types
let id: string | number = "10"

id = 200

//type alias 
//utilizar types em outros lugares
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = "000001"
const shirtId: myIdType = 123

// enum
// tamanhos de roupas (size: medium, size: small)

enum size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const shirt = {
    name: "Camisa manga curta",
    size: size.M
}

console.log(shirt);

//literal types
let test: "autenticado" | null

//test = "outrovalor"

test = "autenticado"
test = null

//funcoes

function sum(a: number, b: number) {
    return a + b
}

console.log(sum(12, 12));

function sayHello(name: string): string {
    return `Hello ${name}!`
}

console.log(sayHello("Ryan"));

function logger(msg: string): void {
    console.log(msg)
}

logger("teste")

function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}

greeting("Ryan")
greeting("Joao", "Sir")

//interfaces

interface MathFunctionParams {
    n1: number;
    n2: number;
}

function sumNumber(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
}

console.log(sumNumber({ n1: 1, n2: 2 }));

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
}

console.log(multiplyNumbers(someNumbers));

//narrowing
// checagem de tipos
function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}

doSomething(10);
doSomething(true)

//generics
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`IITEM: ${item}`);
    })
}

const a1 = [1, 2, 3]
const a2 = ['a', 'b', 'c']

showArraysItems(a1)
showArraysItems(a2)

//classes

class User {
    name;
    role;
    isApproved;

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = age;
        this.isApproved = isApproved;
    }

    showUserName() {
        console.log(`O nome do usuário é: ${this.name}`);
    }
    showUserRole(canShow: boolean) {
        if (canShow) {
            console.log(`O nome do usuário é: ${this.role}`);
            return
        }
        console.log("Informação restrita")
    }
}

const zeca = new User("Zeca", "Admin", true)

console.log(zeca);

zeca.showUserName()
zeca.showUserRole(false)

//interfaces em classes
interface IVehicle {
    brand: string
    showbrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showbrand(): void {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}

const fusca = new Car("VW", 4)

fusca.showbrand()

//herança
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)

console.log(a4);
a4.showbrand()

//decorators

//constructor decorator
function BaseParamters() {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            id = Math.random()
            createdAt = new Date()
        }
    }
}

@BaseParamters()
class Person {
    name

    constructor(name: string) {
        this.name = name;
    }
}

const sam = new Person("Sam")

console.log(sam);