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

