// Function Challenge 1 - passwordValidator

// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false
// --------------------------------------------------------------------------

function isValidPassword(password, username) {
    if (password.length >= 8
        && password.indexOf(' ') === -1
        && password.indexOf(username) === -1) {
        return true
    }
    return false
}

// __________________________________________________________________________

// Function Challenge 2 - Average

// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2
// --------------------------------------------------------------------------

function avg(nums) {
    let sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let average = sum / nums.length;
    return average
}

// __________________________________________________________________________
// Function Challenge 3 - Pangrams

// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

// --------------------------------------------------------------------------

function isPangram(sentence) {
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let lowSentence = sentence.toLowerCase();
    for (i = 0; i < alph.length; i++) {
        if (lowSentence.indexOf(alph[i]) === -1) {
            return false
        }
    }
    return true
}

// __________________________________________________________________________

// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

// --------------------------------------------------------------------------

function getCard() {
    let value = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suit = ['clubs', 'spades', 'hearts', 'diamonds'];
    return obj = {
        value: value[Math.floor(Math.random() * 14)],
        suit: suit[Math.floor(Math.random() * 4)]
    };
}

