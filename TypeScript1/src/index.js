"use strict";
var character = 'mario';
var behave = 'good';
// arrow function with a return type
var circ;
circ = function (diameter) {
    return diameter * Math.PI;
};
// optional (c) and default (d) parameter
var add = function (a, b, c, d) {
    if (d === void 0) { d = false; }
    console.log(a + b);
};
add(5, 7);
// string array
var letters = ['Happiness', 'Chibuzor', 'Topaz'];
letters.push('christian');
// Mixed array
var numbers = ['ken', 4, 'chun-li', 8, 9];
numbers.push(100);
numbers.push('ryui');
// object
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 1;
// types
var sunny;
var age;
var isLoggedIn;
// string array 
var skills;
age = 50;
// union types
var mixed = [];
mixed.push(45);
mixed.push('alphabet');
var uid;
uid = '123';
uid = 123;
//objects
var ninjaOne;
ninjaOne = {
    name: 'yoshi', age: 30
};
var ninjaTwo;
ninjaTwo = {
    name: "mario",
    age: 20,
    beltColour: 'black'
};
// the any type
var years = 34;
years = true;
var niaja;
niaja = { name: 'topaz', age: 56 };
niaja = { name: 45, age: '5 year' };
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
var greet = function (user) {
    console.log(user.name + " says hello");
};
var greetAgain = function (user) {
    console.log(user.name + " says hello");
};
// Function Signature
var greeting;
greeting = function (name, greet) {
    console.log(name + " says " + greet);
};
// Example 2
var calc;
calc = function (numbOne, numbTwo, action) {
    if (action === 'add') {
        return numbOne + numbTwo;
    }
    else {
        return numbOne - numbTwo;
    }
};
//Example 3 
var showDetails;
showDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
// Classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // Method
    Invoice.prototype.format = function () {
        return this.client + " owes $" + (this, this.amount) + " for " + this.details;
    };
    return Invoice;
}());
// Creating an object an instance of the Invoice class
var invOne = new Invoice('mario', 'works on the mario website', 250);
//Access Modifier in TypeScript
