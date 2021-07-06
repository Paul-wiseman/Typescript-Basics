"use strict";
var character = 'mario';
var behave = 'good';
// arrow function 
var circ = function (diameter) {
    return diameter * Math.PI;
};
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
console.log(circ(45));
console.log(character);
console.log(behave);
