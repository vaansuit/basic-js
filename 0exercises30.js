/**
 * 
 * Create an Object

    Define an object representing a person with properties name, age, and city.

Object Destructuring

    Extract name and age from an object using destructuring.

Nested Objects

    Access the b property from a nested object.

Spread Operator

    Merge two objects into one using the spread operator.

Object.keys()

    Get the keys of an object and log them.

Object.values()

    Get the values of an object and log them.

Object.entries()

    Get the entries (key-value pairs) of an object and log them.

Object.assign()

    Create a new object by merging three objects using Object.assign().

Array of Objects

    Create an array of objects representing different fruits with properties name and color.

Update Array of Objects

    Set a property value of each object in an array of books to true.

Destructuring in Arrays

    Destructure the first and second elements of an array into separate variables.

Destructuring with Rest Parameter

    Destructure the first element of an array and collect the remaining elements into a new array.

Function Declaration

    Create a function that takes two numbers and returns their sum.

Function Expression

    Create a function expression that multiplies two numbers and returns the result.

Arrow Function

    Write an arrow function that calculates the square of a number.

Default Parameters

    Write a function that takes a name and a greeting message, with a default value for the greeting message.

Immediate Invoked Function Expression (IIFE)

    Create an IIFE that logs a message to the console when the page loads.

Simple Calculator Function

    Write a function that takes two numbers and an operator (+, -, *, /) and returns the result.

Array Methods

    Use map() to double each number in an array of numbers.

Filter Array

    Use filter() to create a new array containing only even numbers from an array.

Reduce Array

    Use reduce() to sum all numbers in an array.

Find Maximum and Minimum

    Write a function that returns an object with the minimum and maximum values from an array.

Convert Object to JSON

    Convert an object to a JSON string and log it.

Convert JSON to Object

    Parse a JSON string back into an object and log it.

Nested Function

    Write a function that contains another function and demonstrates scope.

Conditional Statements

    Use an if statement to check if a number is positive, negative, or zero.

Switch Statement

    Use a switch statement to determine the day of the week based on a number.

Function with Callback

    Write a function that accepts a callback function and executes it.

Default Function Parameters

    Create a function that takes a user object with default values and returns a greeting message.

Object Method

    Define an object with a method that prints a message including one of its properties.
 */

//Question 1

const person = {
    name: 'Jhon',
    age: 30,
    city: 'New York',
};

console.log(person, typeof person);

//Question 2

const {name, age} = person;

console.log(name, age);

//Question 3

const player = {
    user: 'destroyer',
    hp: 100,
    inventory: {
        ammo: 30, 
        granade: 1, 
        special: 0,
        isBuffed: false,
    }
}

console.log(player.inventory.ammo);

//Question 4

const lion = {
    hp: 100, 
    mana: 250,
    hasAegis: false, 
}

const lina = {
    hp: 250,
    mana: 100, 
    hasAegis: true,
}

const intHeroes = { ...{lina}, ...{lion} };

console.log(intHeroes, typeof intHeroes);

//Question 5

console.log(Object.keys(lina));

//Question 6

console.log(Object.values(lion));

//Question 7

console.log(Object.entries(lina));

//Question 8 

const enemy1 = {
    hp: 100, 
    damage: 10,
    type: 'melee',
}

const enemy2 = {
    hp: 200, 
    damage: 30,
    type: 'melee',
}

const enemy3 = {
    hp: 300, 
    damage: 60,
    type: 'melee',
}

const meleeEnemies = Object.assign({enemy1}, {enemy2}, {enemy3});

console.log(meleeEnemies);

//Question 9

const fruits =[{name: 'orange', color: 'orange'}, {name: 'grape', color: 'purple'}, {name:'banana', color: 'yellow'}];

console.log(fruits, typeof fruits);

//Question 10

const shelfer = [{title: 'Lord of the Rings', read: false}, {title: 'Silmarilion', read: false}, {title: 'Hobbit', read: false}];

shelfer[0].read = true;
shelfer[1].read = true;

console.log(shelfer);

const [first, second] = shelfer;

console.log(first);

//Question 11

const [first_book, ...new_array ] = shelfer;

console.log(new_array);

//Question 12

function sum(num1, num2) {
    return num1 + num2;
}

console.log(`2 + 2 = ${sum(2, 2)}`);

//Question 13

const functionExpression = function(num1, num2) {
    return num1 * num2;
}

console.log(functionExpression(2, 2));

//Question 14

const mathSqrt = n => { return console.log(Math.pow(n, 2))};

mathSqrt(2);

//Question 15

function nameAndGreeting(name, greeting = `Hi, I am ${name}, nice to meet you!`) {
    return greeting;
};

console.log(nameAndGreeting('Jhon'));

//Question 16

(function(){
    function hello() {
        console.log('Hello, i am an IIFI!');
    };
    hello();
}());

function calculator(n1, n2, operator){

    switch (operator) {
        case '+':
            console.log('The sum is ' + n1 + n2);
            break;
        case '-':
            console.log(`The sub is ${n1 - n2}`);
            break;
        case '*':
            console.log('The mult is ' + n1 * n2);
            break;
        case '/':
            console.log('The div is ' + n1 / n2);
            break;
        default:
            console.log(`${operator} is not a valid operator`);
            break;
    
    }

}

calculator(1, 1, '+');
calculator(1, 1, '-');
calculator(1, 1, '*');
calculator(1, 1, '/');
calculator(1, 1, '++++aSJDAISJD');

//Question 17

const arrayOriginal = [0, 2, 4, 6, 8, 10];
const arrayDouble = arrayOriginal.map(damnSon);

function damnSon(n) {
    return n * 2;
}

console.log(arrayDouble);

//Question 18

const listNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const listEvenNums = listNum.filter(findEven);

function findEven(n) {
    if (n % 2 == 0){
        return n;
    }}

console.log(listEvenNums);

//Question 19

const newList = [10, 1, 2, 3, 4];
const sumListN = newList.reduce(sumList);

function sumList(total, n) {
    return total + n;
}

console.log(sumListN);

//Question 20

const minMaxArr = [0, 1, 2, 3, 4, 5, 60, 7, 8, 9, 10]

const minMax = (arr) => {

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    return {
        min,
        max,
    }
}

console.log(minMax(minMaxArr));

//Question 21

const newPerson = {
    name: 'Fedor',
    age: 56,
}

const strg = JSON.stringify(newPerson);

console.log(strg);
console.log(JSON.stringify(newPerson));

//Question 22

const doctorStrange = JSON.parse(strg);

console.log(doctorStrange);

//Question 23

function firstF() {

    function second() {
        return console.log('I am second and i only work inside of the first() function scope');
    }

    second();
    return console.log('I am first() and i work in a global scope!');

}

firstF();

//Question 24

function checkNum(n) {
    if (n < 0) {
        console.log(`${n} is negative`) 
    } else if (n > 0 ) {
        console.log(`${n} is positive`)
    } else if (n === 0){
        console.log(`${n} is ${n}`)
    }
}

console.log(checkNum(0))

//Question 25

function weekDay(n) {

    switch (n) {
        case 1:
            console.log('Today is Monday');
            break;
        case 2:
            console.log('Today is Tuesday');
            break;
        case 3:
            console.log('Today is Wednesday');
            break;
        case 4:
            console.log('Today is Thursday');
            break;
        case 5:
            console.log('Today is Friday');
            break;
        case 6:
            console.log('Today is Saturday');
            break;
        case 7:
            console.log('Today is Sunday');
            break;
    
        default:
            console.log(`${n} is not a valid number, the valid numbers are 1 to 7!`);
            break;
    }
}

weekDay(2);
weekDay(100);

//Question 26

function functionOne(){
    functionTwo();
    return console.log('I am function one');
    
}

function functionTwo() {
    return console.log('I am function two');
}

function functionThree() {
    functionOne();
    functionTwo();
    return console.log('I am the function three!');
}

functionOne();
functionThree();

//Question 27

function greetings(name, greeting = `HI, my name is ${name}, nice to meet you!`) {
    return console.log(greeting);
}

greetings('Jhon');

//Question 28

const newObject = {
    a: 1, 
    b: 2, 
}

function methodToPrint(a) {
    return console.log(`${a.a}`);
}

console.log(methodToPrint(newObject));