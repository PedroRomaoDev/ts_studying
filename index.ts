let x: number = 10;
//declarar variavel == const/ let
x = 16;
console.log(x);
// inferencia x annotation
let y = 12; // inferencia
let z: number = 12; // annotation
// mesmo resultado

// tipos basicos
let firstName: string = "matheus";
const isAdmin: boolean = true;

//String != string
console.log(typeof firstName);

// object
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName);

// tuplas
let myTuple: [number, string, string[]];
//myTuple = [5, "pepe", ["a", "p"]];

//object literals -> {prop: value}
const user: { name: string; age: number } = {
  name: "pedro",
  age: 18,
};
console.log(user);

// any
let a: any = 0;
a = "teste";
a = [];

// union type
let id: string | number = "10";
id = 10;

// type alias
type myIdType = number | string;
const userId: myIdType = 10;
const ProductId: myIdType = "009";

//enum
//tamanho de roupas(size: médio, size: pequeno)
enum size {
  P = "pequeno",
  M = "medio",
  G = "grande",
}
const camisa = {
  name: "camisa polo",
  size: size.G,
};
console.log(camisa);

//literal types
let teste: "algumvalor" | null;
//teste = "algumvalor";

//functions
function soma(a: number, b: number) {
  return a + b;
}
console.log(soma(12, 23));

function sayHello(name: string): string {
  return `Hello ${name}`;
}
console.log(sayHello("matheus"));

function logger(msg: string): void {
  console.log(msg);
}
logger("TESTE!");

function greeting(name: string, greet?: string) {
  console.log(`Olá ${greet} ${name}`);
}
greeting("José");

//interface
interface mathFunctions {
  n1: number;
  n2: number;
}
function sumNumbers(nums: mathFunctions) {
  return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));

function multipleNumbers(nums: mathFunctions) {
  return nums.n1 * nums.n2;
}
const someNumbers: mathFunctions = {
  n1: 5,
  n2: 10,
};
console.log(multipleNumbers(someNumbers));

//narrowing
//checagem tipos
function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`O numero é ${info}`);
    return;
  }
  console.log("Não foi passado um numero");
}
doSomething(5);
doSomething(true);

//generics
function showArrayItens<t>(arr: t[]) {
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
  name;
  role;
  isApproved;
  constructor(name: string, role: string, isApproved: boolean) {
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

//interface em classe
interface IVehicle {
  brand: string;
  showBrand(): void;
}
class car implements IVehicle {
  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }
  showBrand(): void {
    console.log(`A marca do carro é: ${this.brand}`);
  }
}
const fusca = new car("Volkswagen", 4);
fusca.showBrand();

//herança
class superCar extends car {
  engine;

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels);
    this.engine = engine;
  }
}
const a4 = new superCar("Audi", 4, 5.0);
console.log(a4);

//decorators

function BaseParameters() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    };
  };
}
@BaseParameters()
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}
const sam = new Person("Sam");
console.log(sam);
