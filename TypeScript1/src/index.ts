import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

const character = 'mario'; 
const behave = 'good';
// arrow function with a return type
let circ: Function;
 circ = (diameter: number): number => {
return diameter * Math.PI;
};

// optional (c) and default (d) parameter
const add = (a: number, b: number, c?: number | string, d: boolean = false ) => {
    console.log(a + b)
}
add(5, 7)
// string array
let letters = ['Happiness', 'Chibuzor', 'Topaz'];
letters.push('christian');

// Mixed array
let numbers = ['ken', 4, 'chun-li', 8, 9];
numbers.push(100);
numbers.push('ryui');

// object
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};


ninja.age = 1

// types
let sunny: string;
let age: number;
let isLoggedIn: boolean;

// string array 
 let skills: string[];

age = 50;

// union types
let mixed: (string|number)[] = [];
mixed.push(45);
mixed.push('alphabet')

let uid: string|number;
uid = '123';
uid = 123;

//objects
let ninjaOne: object;
ninjaOne = {
    name: 'yoshi', age: 30
};

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
};

ninjaTwo = {
    name: "mario",
    age: 20,
    beltColour: 'black'
 };

 // the any type
 let years: any = 34;
 years = true; 

 let niaja: {name: any, age: any};
 niaja = {name: 'topaz', age: 56};
 niaja = { name: 45, age: '5 year'}

 // Type Aliases
type stringOrNum = String|number;
type objectWithName = { name: string, uid: stringOrNum};

 const logDetails = (uid: stringOrNum, item: string) => {
console.log(`${item} has a uid of ${uid}`);
 };

 const greet = (user: objectWithName) => {
     console.log(`${user.name} says hello`);
 };

 const greetAgain = (user: objectWithName) => {
    console.log(`${user.name} says hello`);
};
 
// Function Signature
let greeting: (a: string, b: string) => void;

greeting = (name: string, greet: string) => {
    console.log(`${name} says ${greet}`)
};

// Example 2

let calc: (a: number, b: number, c: string) => number 

calc = (numbOne: number, numbTwo: number, action: string) => {
    if(action === 'add'){
        return numbOne + numbTwo
    } else {
        return numbOne - numbTwo
    }
};

//Example 3 
let showDetails: (obj: {name: string, age: number}) => void

showDetails = (ninja: {name: string, age: number}) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);

};


// Creating an object an instance of the Invoice class
const invOne = new Invoice('mario', 'works on the mario website', 250);
const invTwo = new Invoice('luigi', 'works on the luigi website', 300);

let invoice: Invoice[] = [];
invoice.push(invOne);
invoice.push(invTwo);

invoice.forEach(inv => {
console.log(inv.client, inv.details, inv.amount, inv.format());
});

//Access Modifier in TypeScript

//interface
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
};

const me: IsPerson = {
    name: 'shaun',
    age: 30,
    speak( text: string): void{
        console.log(text)
    },
    spend(amount: number): number {
        console.log('I spent', amount);
    return amount
    }
}

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name);
}

greetPerson(me);