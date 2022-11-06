// && - whatever expression is on both sides of && must be true for the whole statement to be true

// const password = prompt('Enter your password');

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('Valid password')
// } else if (password.length <= 6 && password.indexOf(' ') !== -1) {
//     console.log('password too short and contains spaces')
// } else if (password.length < 6) {
//     console.log('password too short')
// } else if (password.indexOf(' ') !== -1) {
//     console.log('password cannot contain spaces')
// }

// || - on one of ther statement on either side of the || (pipes) must be true for the statement to be true

//0-5 free
//6-10 $10
//11-59 $20
//60+ free

// const age = -1

// && has priority over ||, but you can change the priority by using parenthases

// if (age > 0 && age < 6 || age > 59) {
//     console.log('free');
// } else if (age > 6 && age <= 10) {
//     console.log('$10');
// } else if (age > 11 && age <= 59) {
//     console.log('$20');
// } else {
//     console.log('Invalid age');
// }

// const firstName = prompt('enter your first name');

// if (!firstName) {
//     firstName = prompt('try again')
// }

// const age = 65;
// if (!(age > 0 && age < 6 || age > 59)) {
//     console.log('you are not a baby or old');
// }

