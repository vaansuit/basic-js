// const movie = {
//     name: "Hallowen",
//     duration: 112, 
//     description: "lorem ipsum dolore etc etc",
//     ratin: 4.5, 
//     genre: ["horror", "old", "terror"],
//     casting: {
//         director: {
//             directorName: "Jhon Carpenter",
//             age: 31, 
//         },
//         actors: {
//             names: ["Actor 1","Actor 2","Actor 3","Actor 4",],
//         }
//     }
// }
/*
console.log(movie.genre);

movie.genre.unshift("trash");

console.log(movie.genre);

console.log(movie.name);

const {name, duration, casting: {director: {directorName}} } = movie;

console.log(directorName);
*/

// :
//Primitive Type x Reference type storage

// let firstValue = "Jhon";

// let secondValue = firstValue; 

// let output = {firstValue, secondValue};

// console.log(output);

// secondValue = "Calleb";

// output = {firstValue, secondValue};

// console.log(output);

// let person = 
// {
// 	name: "Spooky",
// 	age: 40,
// };

// newPerson = person;

// let output = {person, newPerson};

// console.log(output);

// newPerson.name = "Houses";

// output = {person, newPerson};

// console.log(output);

// let amount = "99.6";

// console.log(amount, typeof amount);

// amount = Number(amount);

// amount = parseFloat(amount);

// console.log(amount, typeof amount);

// let amount = 100; 

// amount = +amount; //convert string  to a number
// amount = Number(amount); //convert string to a number
// amount = parseInt(amount); //convert string to a number

// console.log(amount, typeof amount);

// let amount = "99.4";

// amount = Number(amount);

// console.log(amount, typeof amount);

// amount = parseFloat(amount);

// console.log(amount, typeof amount);

// let amount = -123.2;

// console.log(amount, typeof amount);

// amount = Boolean(amount);

// console.log(amount, typeof amount);

// let x = 1;

// x = 5;

// x++;

// console.log(x);

// let x = 5;

// x += 5;

// console.log(x);

// let x;

// console.log(x, typeof x);

// let x;

// x = 5 + null;
// console.log(x);


// let x;

// const monster = "Drácula";
// const hp = 100;

// x = `I'm ${monster}, and i have ${hp} of HP!`;

// console.log(x, typeof x);

// const x = "Hello World";

// console.log(x.indexOf("l"));

// const string = "Hello World";

// let x;

// x = string[1];
// console.log(x); //shows the value of the index passed, it only reads 1 value

// x = string.__proto__;
// console.log(x); //Shows the methods and properties of the object String

// x = string.toUpperCase();
// console.log(x);

// x = string.toLowerCase();
// console.log(x);

// x = string.charAt(1);
// console.log(x); //Does the same thing string[1], we use more often string[1]

// x = string.indexOf("l");
// console.log(x); //Will show the indexOf the first value that he found in the string, we have 3 l but it only return the index of the first, which is 2

// x = string.substring(2, 5);
// console.log(x); // It takes one or two parameters. Will show the characters of the index 2 till 5. If we only put 1 parameter, he will start from that parameter and will take all of the rest of the string

// x = string.slice(5, -2);
// console.log(x); //Does the same of substring but in different way. If leaveas empty, returns the full string. Does the same thing as substring, but it can handle with Negative numbers. 

// x = string.replace("World", "Travis");
// console.log(x); //Take 2 parameters, the first one is the word that will be replaced, the second one it is the new content. If the first parameter didnt exist in the string, nothing will change. If we dont pass the second parameter, nothing will change too. 

// x = string.includes("Hell");
// console.log(x); //It will return a true or false value based on the parameter that we passed. In this case Hell will return true, because Hell exists in Hello. 

// x = string.valueOf();
// console.log(x); //Returns the content of the String() object

// x = string.split();
// console.log(x); //If we leave with no parameters. it will return an array with one value only, that is the string. 

// x = string.split("");
// console.log(x); //If we pass "" as parameter, it will split letter by letter, including empty spaces. 

// x = string.split(" ");
// console.log(x); //If we passe an " ", it will split word by word

// x = string.split("l");
// console.log(x); //It will split everytime that founds the letter l 

/*CAPITALIZE CHALLENGE 

    Take the variable `myString` and capitalize the first letter of the word using some of the methods that we talked about in the last video. Put the result in a variable called `myNewString`.

Create multiple solutions if you would like.

**Expected Result:**

```JavaScript
const myString = 'developer';

console.log(myNewString); // 'Developer'

*/

//First way of doing

// const myString = "developer";
// const myNewString = myString.replace("d", "D");

// console.log(myString);
// console.log(myNewString);

//Second way of doing it 

// const myString = 'developer';
// const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// console.log(myNewString);

//Third way of doing it 

// const myString = 'developer';
// const myNewString = myString[0].toUpperCase() + myString.substring(1);

// console.log(myNewString);

// let x;

// const num  = 5;

// x = num.toString();
// console.log(x, typeof x); //Transform to the type string

// x = num.toString().length;
// console.log(x, typeof x); //Transform the number to string, so we can see the lenght

// x = num.toFixed(2);
// console.log(x, typeof x); //Shows now 2 numbers after comma, transforme the type from num to string

// x = num.toPrecision(3);
// console.log(x, typeof x); //Determines how many numbers it will show to us, the type mantain as number

// x = num.toExponential(2);
// console.log(x);

// x = num.toLocaleString('ar-AR');
// console.log(x, typeof x); //Transform the number to the informed language. The type change from Number to string

// x = num.valueOf();
// console.log(x, typeof x); //Returns the content of the variable, mantaining it is type

// let x;

// x = Math.sqrt(9);
// console.log(x, typeof x); //Shows the square of the number

// x = Math.abs(-15);
// console.log(x, typeof x); //Sows the absolut value of a number. An absolut value is the non-negative value of without regard it sign.

// x = Math.round(9.3);
// console.log(x, typeof x); //It will round the number. If .5 it will output 9. Below .5 it will output 8. Above .5 it will output 10. 

// x = Math.ceil(4.2);
// console.log(x, typeof x); //It will round the number up regardeless the value afte ".".

// x = Math.floor(4.2);
// console.log(x, typeof x); //It will round the number down regardeless the value after ".".

// x = Math.pow(2, 3); 
// console.log(x, typeof x); //Potencia matematica, seila como escreve isso em ingles

// x = Math.min(3, 4, 10);
// console.log(x, typeof x); //Output the minimum value

// x = Math.max(3, 4, 10);
// console.log(x, typeof x); //Output the maximum value

// x = Math.random();
// console.log(x, typeof x); //WIll randomize a decimal number between 0 and 1

// x = Math.random() * 10;
// console.log(x, typeof x); //Will randomize a decimal number between 0 and 9

// //We can make it randomize from 1 to 10 
// x = Math.random() * 10 + 1;
// console.log(x, typeof x);

// //We can use multiple Math objects, to give to us a rounded random number
// x = Math.round(Math.random() * 10 + 1);
// console.log(x, typeof x);

/**
 * 
 * NUMBERS EXERCISE 
 * 
 * *Instructions:**

Create a variable called `x` that is a random number between 1 and 100 along with a variable called `y` that is a random number between 1 and 50.

Create a variable for the sum, difference, product, quotient and remainder of `x` and `y`. Log the output in a string that shows the two numbers of `x` and `y` along with the operator and result.

- You can log the output string directly or put them in separate variables and log them like below.
- You can use string concatenation or template literals for the output.

**Expected Result:**

```JavaScript
console.log(sumOutput); // 31 + 15 = 46
console.log(differenceOutput); // 31 - 15 = 16
console.log(productOutput); // 31 * 15 = 465
console.log(quotientOutput); // 31 / 15 = 2.066666666666667
console.log(rmOutput); // 31 % 15 = 1
 */


// let x = Math.random() * 100 + 1;
// let y = Math.random() * 50 + 1;

// const sumOutput = `${Math.round(x)} + ${Math.round(y)} = ${Math.round(x + y)}`;
// const differenceOutput = `${Math.round(x)} - ${Math.round(y)} = ${Math.round(x - y)}`;
// const productOutput = `${Math.round(x)} * ${Math.round(y)} = ${Math.round(x * y)}`;
// const quotientOutput = `${Math.round(x)} / ${Math.round(y)} = ${x / y}`;
// const rmOutput = `${Math.round(x)} % ${Math.round(y)} = ${Math.round(x % y)}`;

// console.log(sumOutput);
// console.log(differenceOutput);
// console.log(productOutput);
// console.log(quotientOutput);
// console.log(rmOutput);

// let d;

// d = new Date();
// console.log(d, typeof d); //That will output the date

// d = d.toString(); 
// console.log(d, typeof d); //Will change the type from Object to string

// d = new Date('2021-07-10T12:30:300');
// console.log(d, typeof d); //Will create a date with the parameters passed

// d = Date('07/10/2021 12:30:00');
// console.log(d, typeof d); //Another way to create a date

// d = Date('2022-07-10');
// console.log(d, typeof d); //Here we must be aware of one thing. It will display day 10 if we dont specifie our timezone

// d = Date('07/10/2021');
// console.log(d, typeof d); //Another way to create e data

// d = Date.now();
// console.log(d, typeof d); //WIll show us the exact date that we are in milliseconds

// d = new Date();
// d = d.getTime(); //Another way to get the exact date displayed in milliseconds
// console.log(d, typeof d);

// d = d.valueOf();
// console.log(d, typeof d); //Another way to get the exact date displayed in milliseconds

// //We can also convert milliseconds in to a date

// d = new Date(1723819133035);
// console.log(d, typeof d); //That convert the milliseconds in to a Date format


//Working with the Date API Intl

// let x;
// let d = new Date();

// const x1 = Intl.DateTimeFormat('pt-BR').format(d); 
// console.log(x1); //The output will be the Date Time formatted to the parameter that we passed

// const x2 = Intl.DateTimeFormat('default').format(d);
// console.log(x2); //That will output the default format, using the browser info of the system

// const x3 = Intl.DateTimeFormat('pt-BR', { month: 'short'}).format(d);
// console.log(x3); //That will output the short name of the month in the pt-BR format. 

// //There is a better way to call the Intl

// x = d.toLocaleString('pt-BR');
// console.log(x); //Does the same thing as x1

// x = d.toLocaleString('pt-BR', {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     timeZone: 'America/Sao_Paulo',});

// console.log(x);

// let x; 

// //Mostly common way to create Arrays. We call it lireals
// const numbers = [1, 2, 3];
// const fruits = ['apple', 'grape', 'strawberry'];

//Uncommon way to create Arrays. We call it constructor

// const mixed = new Array('apple', 13, 'watermellon');

// x = numbers[0];
// console.log(x); //Output the index 0 of the array, in this case number 1

// x = numbers[1] + numbers[2];
// console.log(x); //Outputs the sum of the numbers indicated in the index position

// x = `My favorite fruit is ${fruits[1]}`;
// console.log(x); //Outputs the fruit in the index 1, grape in this case

// x= numbers.length;
// console.log(x); //Outputs the lenght of the array

// fruits[0] = 'soda'; //Replace the value of the index mentioned

// // fruits.length = 2; //We can set the length of the array

// fruits[fruits.length] = 'new value'; //A way to add a new value in to the end of the array

// x = fruits;

// console.log(x);

// let x;

//  const array = [0, 1, 2, 3, 4, 'peach'] // Literal
//  const arrayConstructor = new Array(1, 2, 3, 4, 5); //constructor

//  x = array.push();
//  console.log(x); //With no parameters, it returns the lenght of the array

//  x = array.push(5);
//  console.log(x, array); //Insert the element in the end of the array. You can insert multiple values separated by a , .

//  x = array.pop();
//  console.log(x, array); //Removes the last element of the array

//  x = array.unshift(2);
//  console.log(x, array); //Inserts an element in the index 0 of the array.

//  x = array.shift();
//  console.log(x, array); //Removes the element in the index 0 of the array. 


//  x = array.reverse();
//  console.log(x);

//  x = array.includes(2);
//  console.log(x); //Returns a true or false statement. It checks if the element exist in the array

//  x = array.indexOf();
//  console.log(x); //Indicates the index of the element. If the element doesnt exist or is informed, the return will be -1.

//  x = array.slice(1, 4);
//  console.log(x, array); //Will output the elements of the array starting in the first index passed, in this case 1 and finishing after the last index passed, in this case 3. That does not modify the array structure. 

//  x = array.splice(1, 2);
//  console.log(x, array); //In this case, x will be an array with the index 1, 2. And now our original Array was modified, having now only 0, 3, 4.

// /**
//  * If splice() receives index that does not exist in the array. It will create an empty array.
//  * If splice() receives anything after the second index, it will be added in the last index of the original array
//  * If splice() receives any string as parameter, it will take all the elements of the original array and passing through the new array, leaving the original empty
//  * 
//  */

//  x = array.splice(1, 2).reverse();
//  console.log(x, array); //We can use multiples arrays methods combined

// let x;  

// const agiHero = ['magina', 'phanton lancer', 'phanton assassin'];
// const intHero = ['invoker', 'lina', 'lion'];

// agiHero.push(intHero);
// console.log(agiHero); // Now the agiHero array has the intHero array inside of it. 

// x = agiHero[3][2];
// console.log(x); //Will display  lion. It takes the index that the array is and than take the element of. We can do that infinitelly

// const allHeroes = [agiHero, intHero];
// console.log(allHeroes); //That will create an array with the 2 arrays inside of it. 

// x = allHeroes[1][0];
// console.log(x); //The output will be the array that is in the index 1, taking the element of that array that is in the index 0. In this case will return invoker.

// x = agiHero.concat(intHero);
// console.log(x, agiHero); //That will create an new Array with all the elements of the arrays indicated. It wont change the content of the originals arrays, in this case intHero and agiHero.

// //Spread Operator(...)

// x= [...agiHero, ...intHero];
// console.log(x); //Does the same thing as .concat. Is used more often

// //Flatten Arrays

// const arr = [1, 2, [3, 4], 5, 6, [7, 8], 9, 10];
// x = arr.flat();
// console.log(x); //It will output an single array with all elements

// //Static Methods on Array Object

// x = Array.isArray('Hello');
// console.log(x); //WIll return a boolean statement, in this case false, because 'Hello' is not an array.

// x = Array.from('Hello World');
// console.log(x); //WIll create an array for each element space inside the string, including the blank ones. 

// const a = 1;
// const b = 2;
// const c = 3;

// x = Array.of(a, b, c);
// console.log(x); //Will create an Array and the elements will be the content of the variables. 



