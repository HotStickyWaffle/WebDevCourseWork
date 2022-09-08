while (true) {
    let max = parseInt(prompt('Enter the maximum number!'));


    while (!max) {
        max = parseInt(prompt('Invalid entry. Please enter the maximum number!'));
    }

    const answer = Math.floor(Math.random() * max) + 1;

    let guess = parseInt(prompt('Guess the number!'));
    let attempts = 1;

    while (parseInt(guess) !== answer) {
        if (guess === 'q') break;
        attempts++;
        if (guess > answer) {
            guess = prompt('Guess is too high. Try again.')
        } else (
            guess = prompt('Guess is too low. Try again.')
        )
    }

    if (guess === 'q') {
        window.alert('Ok. I guess you\'re a quitter.')
    } else {
        window.alert(`You guessed right in ${attempts} tries`)
    }
}

// window.alert('Enter "q" to quite')




