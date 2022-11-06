//DEFAULT PARAMETERS - SETS A DEFAULT VALUE FOR A PARAMETER
//SO A VALUE CAN BE ENTERED, BUT IF NO VALUE IS ENTERED THERE IS A DEFAULT VALUE
//IN THIS EXAMPLE YOU COULD ADD AN IF STATEMENT TO GIVE THE ARGUMENT A VALUE IF IT'S UNDEFINED, BUT THERE IS A BETTER WAY

// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1
// }

//SPREAD - TAKES AN ITERABLE AND ENTERS EACH OF THEIR ELEMENTS INTO AN ARGUMENT AS SEPERATE ARGUMENTS

//SPREAD FOR FUNCTION CALLS
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Math.max(...nums)
//IN THIS SITUATION ENTERING JUST THE ARRAY NAME DOESN'T WORK, SO USING SPREAD TAKES EACH ITEM AT ADDS IT IN AS A SERPATE ARGUMENT
// console.log(...nums)
//IN THIS EXAMPLE, JUST ENTERING THE ARRAY NAME WOULD PRINT THE ARRAY AS AN ARRAY, BUT USING SPREAD WILL PRINT ONLY THE ITEMS
// console.log(...'HELLO')
//IN THIS EXAMPLE EACH ELEMENT OF THE STRING IS A LETTER, SO IT WOULD PRINT EACH LETTER SEPERATE FROM EACHOTHER

//SPREAD CAN ALSO BE USED TO ADD ITERABLES, LIKE ARRAYS, INTO A NEW ARRAY
// const dogs = ['Blue heeler', 'Corgi', 'Shiba', 'Labrador']
// const cats = ['Black cat', 'Orange cat', 'Grey cat']

// const allPets = [...dogs, ...cats]
//THIS DOES NOT CHANGE THE ORIGINAL ARRAYS

//SPREAD WITH OBJECTS
//WORKS THE SAME AS WITH ARRAYS
// const cats = {legs: 4, soBad: true, floofLevel: low}
// const dogs = {smart: 'no', goodBoy: true, floofLevel: high}

// const moreDogs = {...dogs, likesPets: true}

//IF THER ARE COMMON KEYS BETWEEN THE OBJECTS, WHICHEVER COMES SECOND WILL 'WIN' AND THAT WILL BE THE VALUE FOR THAT KEY
// const catDog = {...cats, ...dogs}

//SPREAD OFTEN USED TO SIMPLY MAKE A COPY OF AN OBJECT OR ARRAY, OR ADD INFORMATION TO AN OBJECT OR ARRAY
// const formData = {
//     email: 'person@gmail.com',
//     password: 'Password123',
//     username: 'IamPerson'
// }
// const newUser = {...formData, id: 2342, isAdmin: false}

//REST PARAMETERS - TURNS ARGUMENTS INTO ARRAYS, ALLOWING US TO APPLY ARRAY METHODS TO THEM
// function sum(...nums){
//     return nums.reduce((total, el) => total + el)
// }

// function raceResults(gold, silver, bronze, ...alsoRan) {
//     console.log(`The gold goes to ${gold}`);
//     console.log(`The silver goes to ${silver}`);
//     console.log(`The bronze goes to ${bronze}`);
//     console.log(`Good try ${alsoRan}`);
// }

//DESTRUCTURING - CLEANER SYNTAX TO TURN VALUES AND PROPERTIES FROM ARRAYS AND OBJECTS AND TURN THEM INTO VARIABLES

//DESTRUCTURING FROM ARRAYS
// const scores = [837, 827, 787, 638, 589, 538, 483];

// const highScore = scores[0];
// const secondHighScore = scores[1];
//OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOR
// const [gold, silver, bronze, ...losers] = scores;
//THIS CREATES NEW VARIABLES FOR THE ELEMENTS IN THE ARRAY, IN ORDER THEY ARE LISTED.
//USING REST ALLOWS YOU TO THEN PUT THE REMAINING VALUES INTO THEIR OWN ARRAY

//DESTRUCTURING FROM OBJECTS
// const user = {
//     name: 'Dude Person',
//     email: 'person@gmail.com',
//     password: 'Password123',
//     username: 'IamPerson',
//     city: 'Townsville',
//     state: 'West Dekota',
// }

// const user2 = {
//     name: 'Lady Person',
//     email: 'lady@gmail.com',
//     password: 'Password456',
// }

// const { email, password } = user;
//CREATED NEW VARIABLES BY CALLING OUT THE KEYS IN THE OBJECT.  UNLIKE WITH ARRAYS, ORDER DOESN'T MATTER
// const { username: playerName } = user;
//USING COLONS, YOU CREATE THE VARIABLE AND ALSO RENAME IT SOMETHING DIFFERENT THATN THE ORIGINAL KEY
// const {email, username, city = 'N/A', state = 'N/A'} = user2;
//YOU CAN USE DEFAULT VALUE WITH THIS TO CREATE A VARIABLE WITH A PRESET VALUE IF THAT KEY VALUE ISN'T IN THE OBJECT

//DESTRUCTURING FROM PARAMETERS

// const user = {
//     name: 'Dude Person',
//     email: 'person@gmail.com',
//     password: 'Password123',
//     username: 'IamPerson',
//     city: 'Townsville',
//     state: 'West Dekota',
// }

// function liveWhere(user) {
//     return `${user.city}, ${user.state}`
// }
//OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOR
// function liveWhere(user) {
//     const { city, state } = user;
//     return `${city}, ${state}`
// }
// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOR
// function liveWhere({ city, state }) {
//     return `${city}, ${state}`
// }


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

// movies.filter((movie) => movie.score >= 80)
//OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOR
// movies.filter(({ score }) => score >= 80)
//MORE USEFUL WHEN DEALING WITH LONGER FUNCTIONS

// movies.map(movie => {
//     return `${movie.tile} (${movie.year}) is rate ${movie.score}`
// })
//OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOR
// movies.map(({ title, score, year }) => {
//     return `${tile} (${year}) is rate ${score}`
// })