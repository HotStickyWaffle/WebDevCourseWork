// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for ([initial expression]; [condition]; {increment expression})
// initial expression - the initial value - in this case i is set to equal 1
// condition - a boolean that declares that as long as it remains true, the loop continues, and won't be made false by the loop
// increment expression - if the condition remains true, the value of the initial expression is updated according to the increment

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// the initial expression sets the variable i to the value 1
// the condition is set to continue the loop as long as i remain less than or equal to 10, and won't be set beyond 10
// the increment expression adds 1 (++) to the value of i in each loop

// let string = 'Da ba dee da ba daa'
// for (let i = 1; i <= 6; i++) {
//     console.log(string);
// }

//  THIS ABOVE EXAMPLE SHOWS, THE VALUE BEING PRINTED DOES NOT HAVE TO CORROLATE TO THE VALUE IN THE for STATEMENT.
// THE for STATEMENT CHECKS FOR THE VALUE OF i AND REPEATS THE PREVIOUSLY DEFINED VARIABLE

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// let z = 2
// for (let i = 1; i <= 20; i += z) {
//     console.log(i)
// }

// give even numbers, up to 20.  See that you can also assign variable and use the variables within the loops.

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

//for (let i = 10; i <= 1000; i *= 10) {
//     console.log(i);
// }

// you can also count down, divide, or multiply

//-----------------------------------------------------------------------------------------------------------------------------------------------------


// looping over arrays - set i to zero to start at the first index of the array,
// set the condition for the loop to be i being less that the length of the array,
// at 1 to i for each loop,
// set the output to be the array with the value of i representing the index

// const animals = ['Lions', 'Tigers', 'Bears', 'Ducks', 'Chickens'];

// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }

//go from the end of the array by setting i to the length of the array minus 1 (length is not index, so length is always 1 larger than the last index),
// set the condition that i never goes below 0, which would be the last index, and subtract 1 on each loop

// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(i, animals[i]);
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------


// You can use methods to alter the output of the items in the array

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];


// for (let i = 0; i < people.length; i++) {
//     console.log(i, '|', people[i].toUpperCase());
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------

//Nested loop - Each time the outter loop runs once, the inner loop performs it's entire series of loops before the outter loop runs a 2nd time

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j <= 3; j++) {
//         console.log(`     j is: ${j}`)
//     }
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------

//Nested array - use i to define the index of each array within the nested array.  then set a new constant to define each inner array within the outter array.
//then use j to pull the items in each inner array and give each item in that array until inner loop is complete, which starts the next round of
//the outter loop and starts on the next array

// const seatingChart = [
//     ['Mer', 'Cait', 'Jon'],
//     ['Joe', 'Jack', 'Jim', 'Pam'],
//     ['Mike', 'Dwight', 'Andy', 'Erin']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`-Row #${i + 1}-`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// While loops - just set the variable, then with while, you set the condition, than add any parameters after in the curly brakets


// let i = 0;
// while (i < 10) {
//     i++;
//     console.log(i);
// }

// While loops are more useful when you don't know how many loops will be needed, like how many turns a game would take.

// const password = 'BabyHippo';

// let guess = prompt('Enter the password');

// while (guess !== password) {
//     guess = prompt('Incorrect. Please re-enter the password');
// }
// console.log('You got it!')

//-----------------------------------------------------------------------------------------------------------------------------------------------------

//Break - stops the loop when a certain condition is met

// let input = prompt('SAY IT TO SOMEBODY!')
// while (true) {
//     input = prompt(input);
//     if (input === 'STOP!') break;
// }

// window.alert("You've escaped")

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// For...Of loops - for (variable of iterable){statement}

// const subreddits = ['puppies', 'funny', 'nsfw', 'hockey', 'games', 'ama']

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Go to reddit.com/r/${subreddits[i]}`)
// }

//For..Of is much easier to read and cleaner for pulling out individual items from an array OR OTHER ITERABLE OBJECTS

// for (let sub of subreddits) {
//     console.log(`Go to reddit.com/r/${sub}`)
// }

//for...of with nested arrays

// const seatingChart = [
//     ['Mer', 'Cait', 'Jon'],
//     ['Joe', 'Jack', 'Jim', 'Pam'],
//     ['Mike', 'Dwight', 'Andy', 'Erin']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student)
//     }
// }

// for (let char of 'HELLO WORLD!') {
//     console.log(char)
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------

//for in - iterates over an object literal, since it is not iterable, it doesn't work with for...of
//it will only give you the key, but not the value, so you will then need to use the key to pull the value

// const testScores = {
//     bob: 80,
//     mike: 67,
//     joe: 78,
//     mary: 87,
//     jane: 61,
//     jim: 80,
//     dwigt: 73,
//     andy: 81,
//     mike: 92,
//     pam: 84,
//     lucy: 72,
//     earl: 92,
//     remy: 99,
// }

// // for (let student in testScores) {
// //     console.log(`${student}:${testScores[student]}`)
// // }

// //you can also iterate an object with:
// // Object.keys(objectName) - an arrary of keys
// // Object.values(objectName) - and array of values
// // Object.entries(objectName) - nested arrays where each inner array contains a key its value

// // console.log(Object.keys(testScores));
// // console.log(Object.values(testScores));
// // console.log(Object.entries(testScores));

// //You can then use these with to iterate the object

// let total = 0;
// let scores = Object.values(testScores)
// for (let score of scores) {
//     total += score;
// }
// console.log(total / scores.length)






// INFINITE LOOP, THIS WILL DESTROY EVERYTHING!!!!!!!!!!!!!!!!
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// for (let i = 10; i >= 0; i *= 10) {
//     console.log(i);
// }
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// INFINITE LOOP, THIS WILL DESTROY EVERYTHING!!!!!!!!!!!!!!!!