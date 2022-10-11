// FOREACH - PASSING EACH ELEMENT IN AN ARRAY THROUGH THE FUNCTION ONCE

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function print(element) {
//     console.log(element)
// }
// numbers.forEach(print)

//more commonly
// numbers.forEach(function (el) {
//     console.log(el)
// })

//THIS IS USUALLY DONE NOW WITH FOR...OF LOOPS
//ANOTHER EXAMPLE
// const movies = [
//     {
//         title: 'Jurrasic Park',
//         score: 99
//     },
//     {
//         title: 'Step Brothers',
//         score: 95
//     },
//     {
//         title: 'Crimson Peak',
//         score: 45
//     },
//     {
//         title: 'E.T.',
//         score: 80
//     },
// ]

// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}/100`)
// })

// MAP - LOOPS EACH ITEM IN AN ARRAY THROUGH A FUNCTION JUST LIKE FOREACH, BUT THEN TURNS THOSE RESULTS INTO A NEW ARRAY

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const doubles = numbers.map(function (num) {
//     return num * 2;
// })

// const movies = [
//     {
//         title: 'Jurrasic Park',
//         score: 99
//     },
//     {
//         title: 'Step Brothers',
//         score: 95
//     },
//     {
//         title: 'Crimson Peak',
//         score: 45
//     },
//     {
//         title: 'E.T.',
//         score: 80
//     },
// ]

// const titles = movies.map(function (movie) {
//     return movie.title;
// })

// ARROW FUNCTIONS -  A SHORTHAD WAY OF WRITING A FUNCTION EXPRESSION,
//SO IT'S USEFUL FOR FUNCTIONS INSIDE OTHER FUNCTIONS OR METHODS THAT DON'T NEED TO BE CALLED BACK TO LATER IN YOUR CODE

// const add = function (x, y) {
//     return x + y;
// }
//THIS CAN BE WRITTEN AS

// const add = (x, y) => {
//     return x + y;
// }

// const square = (num) => {
//     x ** 2
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

// //THE '()' NEED TO BE USED EVEN WHEN THERE IS NO ARGUMENT,
// //BUT THEY ARE OPTIONAL IF THERE IS ONLY 1 ARGUMENT REQUIRED EX:VVVV

// const square = num => {
//     x ** 2
// }

// IMPLICIT RETURNS - FURTHER SHORTEN ARROW FUNCTIONS BY ELIMINATING THE 'RETURN' CALL BUT USING () INSTEAD OF {}
//ONLY WORKS WITH ONE AND ONLY ONE EXPRESSION

// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )

//YOU CAN ALSO ELIMINATE EVEN NEEDING THE () IF EVERYTHING IS KEPT ON 1 LINE, BUT THAT'S USUALLY ONLY USFUL FOR VERY SHORT/SIMPLE FUNCTIONS

// const add = (a, b) => a + b

// const movies = [
//     {
//         title: 'Jurrasic Park',
//         score: 99
//     },
//     {
//         title: 'Step Brothers',
//         score: 95
//     },
//     {
//         title: 'Crimson Peak',
//         score: 45
//     },
//     {
//         title: 'E.T.',
//         score: 80
//     },
// ]

//THESE ALL WORK THE SAME WAY

// const outOfTen = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}/10`
// })

// const outOfTen = movies.map((movie) => {
//     return `${movie.title} - ${movie.score / 10}/10`
// })

// const outOfTen = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}/10`
// ))

// const outOfTen = movies.map(movie => `${movie.title} - ${movie.score / 10}/10`)



//setTimeout - allows you to delay the execution of the function
//setTimeout(handler: the thing being executed, timeout?: how long to wait to perform the action)

// console.log('Hello!')
// setTimeout(() => {
//     console.log('Are you still there?')
// }, 3000)

// SETINTERVAL - WORKS SIMILAR, BUT WILL REPEAT THE FUNCTION AFTER THE SET INTERVAL

// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000)

//CLEARINTERVAL - YOU CAN USE THIS WITH THE VARIABLE NAME TO STOP. IN THIS CASE CLEARINTERVAL(ID)

// FILTER - USED TO PULL SPECIFIC ITEMS OUT OF AN ARRAY.  IT WILL NOT ALTER THE ORIGINAL ARRAY, JUST CREATE A NEW ONE

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const even = numbers.filter(eNum => eNum % 2 === 0)

// const movies = [
//     {
//         title: 'Jurrasic Park',
//         score: 99,
//         year: 1995
//     },
//     {
//         title: 'Step Brothers',
//         score: 95,
//         year: 2008
//     },
//     {
//         title: 'Crimson Peak',
//         score: 45,
//         year: 2015
//     },
//     {
//         title: 'E.T.',
//         score: 80,
//         year: 1982
//     },
//     {
//         title: 'The Spirit',
//         score: 20,
//         year: 2011
//     }
// ]

// // const goodMovies = movies.filter(good => good.score >= 80)
// // const badMovies = movies.filter(bad => bad.score < 80)
// // const recentMovies = movies.filter(newer => newer.year > 2000)

// // YOU CAN USE THESE METHODS TOGETHER!

// // const goodMovies = movies.filter(good => good.score >= 80)
// // const goodTitles = goodMovies.map(goodT => goodT.title)
// // OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOR

// const goodTitles = movies
//     .filter(good => good.score >= 80)
//     .map(goodT => goodT.title)

//CAN BE ALL ON ONE LINE, BUT WHEN FUNCTIONS GET LONGER IT MIGHT BE CLEARER TO PUT EACH METHOD ON IT'S OWN LINE

//EVERY - TESTS TO SEE IF ALL THE ITEMS IN AN ARRAY ARE TRUE, AND IF SO RETURNS TRUE.  IF ANY ARE FALSE IT RETURNS FALSE

// const exams = [80, 67, 78, 87, 61, 80, 73, 81, 92, 84, 72, 92, 99,]

// exams.every(score => score >= 75) //this would return false

// //SOME - WORKS THE SAME, BUT RETURNS TRUE IF ANY OF THE ELEMENTS PASS THE TEST

// exams.some(score => score >= 75) //this would return true

// REDUCE - TAKES ALL ELEMENTS IN AN ARRAY AND REDUCES IT TO A SINGLE VALUE
//syntax  - array.reduce((accumulator, currentValue) => {
//     how you want to process those values
// })
//ACCUMULATOR - THE VALUE WE ARE REDUCING DOWN TO
//CURRENTVALUE - REPRESENTS EACH INDIVIDUAL ELEMENT

//EXAMPLE:
//[3,5,7,9,11].reduce((accumulator, currentValue) => {
//return accumulator + currentValue;
//})
//IN THIS EXAMPLE, THE ACCUMULATOR STARTS AT 3 (THE FIRST VALUE IN THE ARRAY), THEN BEGINS LOOPING AND EACH LOOP ADDS THE NEXT VALUE TO
//THE ACCUMULATOR WHILE MAINTAINING THE TOTAL AFTER EACH LOOP.  THIS EXAMPLE WILL GIVE US THE TOTAL SUM OF ALL THE VALUES IN THE ARRAY

// const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

// const total = prices.reduce((total, price) => total + price)

// const total = prices.reduce((total, price) => {
//     let plusTax = (total + price) * 1.08;
//     return Math.round(plusTax * 100) / 100;
// })

//FIND THE LOWEST VALUE IN AN ARRAY

// const low = prices.reduce((min, price) => {
//     if (price < min) {
//         return price;
//     } return min;
// })

// const movies = [
//     {
//         title: 'Jurrasic Park',
//         score: 99,
//         year: 1995
//     },
//     {
//         title: 'Step Brothers',
//         score: 95,
//         year: 2008
//     },
//     {
//         title: 'Crimson Peak',
//         score: 45,
//         year: 2015
//     },
//     {
//         title: 'E.T.',
//         score: 80,
//         year: 1982
//     },
//     {
//         title: 'The Spirit',
//         score: 20,
//         year: 2011
//     }
// ]

// const high = movies.reduce((best, movie) => {
//     if (movie.score > best.score) {
//         return movie;
//     }
//     return best;
// }).title

// YOU CAN ALSO SPECIFY STARTING POINT BY ADDING A 2ND ARGUMENT THAT WILL SPECIFY THE STARTING POINT FOR THE REDUCER
// const evens = [2,4,6,8];
// evens.reduce((sum, num) => sum + num, 100)
//THIS STARTS THE ACCUMULATOR AT 100, THEN ADDS THE FIRST VALUE AND BEGINS THE PROCESS

// KEYWORD 'THIS' WITH ARROW FUNCTIONS
// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// //BUT IF YOU TRY THIS WITH AN ARROW FUNCTION IT WON'T WORK
// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: () => {
//         return `${this.firstName} ${this.lastName}`
//     }
// } 
