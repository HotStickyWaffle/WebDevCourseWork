// function singSong() {
//     console.log('DO')
//     console.log('RE')
//     console.log('ME')
//     console.log('FA')
//     console.log('SO')
//     console.log('LA')
//     console.log('TE')
//     console.log('DO')
// }

// singSong();

// function dice(sides) {
//     console.log(Math.floor(Math.random() * sides) + 1);
// }

// function greet(firstName) {
//     console.log(`Hi, ${firstName}`)
// }

// function greet(firstName, lastName) {
//     console.log(`Hi, ${firstName} ${lastName}`)
// }

// function greet(firstName, lastName) {
//     console.log(`Hi, ${firstName} ${lastName[0]}!`)
// }

// function repeat(msg, num) {
//     let result = '';
//     for (let i = 0; i < num; i++) {
//         result += msg;
//     }
//     console.log(result)
// }

//RETURN always ends the function, so anything placed after the return will not be executed.
//(you can add conditionals that give a return before the final return of the function)

// function add(x,y){
//     if (x !== )
//     return x + y;
// }

//scope - variables defined in a function are only defined within that function and cannot be used outside the function.
// function collectEggs(){
//     let totalEggs= 6;
// }
// console.log(totalEggs);
//This will give undefined because totalEggs is only defined within the function collectEggs
//You can reference variables from outside the function within the function

//block scope - a variable is only defined within it's block, which is anything within {} in anything besides a function (so loops/conditionals/ect.)
//lexical scope - the inner function of nested functions can reference a variable from an outer function. Outter functions cannot reference variables from the inner functions

//function expression - functions can be named by a variable instead of within the function.

// function add (x,y){
//     return x = y
// }

// const add = function (x,y){
//     return x = y
// }
// ^^^^^^^^ These are both the same and would work the same way = add(2,3) would return 5 in both cases

//higher order functions - functions that operate with other functions

//example 1 - passing a function as an argument

// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f()
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll)
// }

// callTwice(rollDie)

//example 2 - returning a function

// function makeBetweenFunc(min, max) {
//     return function (num) {
//         return num >= min && num <= max
//     }
// }

// //You can then take this function and make variables that that will perform the arguments of the outter function, and then allow you to fill in the argument for the inner function

// const isChild = makeBetweenFunc(0, 18)
// const isAdult = makeBetweenFunc(19, 64)
// const isSenior = makeBetweenFunc(65, 120)

//from here, you can input one of those variables with an argument to fill in the argument of the inner variable
// ex: isAdult(21) would return true

// defining functions as methods - all methods (ex: string.toUpperCase()) are already funtions, and you can define functions as methods

// const math = {
//     multiply: function (x, y) {
//         return x * y;
//     },
//     divide: function (x, y) {
//         return x / y;
//     },
//     square: function (x) {
//         return x * x;
//     },
// }

//there is also a shorthand verison, so you don't need to call 'function'

// const math = {
//     multiply(x, y) {
//         return x * y;
//     },
//     divide(x, y) {
//         return x / y;
//     },
//     square(x) {
//         return x * x;
//     },
// }

//THIS  - allows you to call the value of a key using a function within an object

// const cat = {
//     name: 'Blue',
//     color: 'grey',
//     breed: 'floof',
//     meow() {
//         console.log(`${this.name} says meow`);
//     }
// }

//Try/Catch - a way to see if code will fail in some way wihtout it actually failing
//in the example, there is no 'hello' method

// try {
//     hello.toUpperCase();
// } catch {
//     console.log('Error')
// }

// function yell(msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(3));
//     } catch (e) {
//         console.log('Please pass a string')
//     }
// }