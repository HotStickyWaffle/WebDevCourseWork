const submitButton = document.querySelector('#submitButton');
const imageUrl = document.querySelector('#imageUrl');
const topTextInput = document.querySelector('#topText');
const bottomTextInput = document.querySelector('#bottomText');
const collage = document.querySelector('#collage');

submitButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (imageUrl.value !== '') {
        // create meme - add image, text, and delete message

        const memeDiv = document.createElement('div');
        memeDiv.classList.add('memeDiv');

        const innerDiv = document.createElement('div');
        innerDiv.classList.add('innerDiv');

        const memeImage = document.createElement('img');
        memeImage.src = imageUrl.value;
        memeImage.classList.add('memeImage');

        const deleteText = document.createElement('p');
        deleteText.innerText = 'DELETE MEME?';
        deleteText.classList.add('deleteText');
        deleteText.classList.add('hideDeleteText');

        innerDiv.append(memeImage);
        memeDiv.append(innerDiv);
        memeDiv.append(deleteText);

        if (topTextInput.value !== '') {
            const topText = document.createElement('p');
            topText.innerText = topTextInput.value;
            topText.classList.add('topTextSettings');
            innerDiv.append(topText);
        }

        if (bottomTextInput.value !== '') {
            const bottomText = document.createElement('p');
            bottomText.innerText = bottomTextInput.value;
            bottomText.classList.add('bottomTextSettings');
            innerDiv.append(bottomText);
        }

        collage.append(memeDiv)

        imageUrl.value = '';
        topText.value = '';
        bottomText.value = '';
    }
})

collage.addEventListener('mouseover', function (evt) {
    const img = evt.target;
    const innerDiv = img.parentElement;
    const memeDiv = innerDiv.parentElement;
    const deleteText = memeDiv.lastChild;

    if (evt.target.classList.contains('memeImage') === true) {
        innerDiv.classList.add('hovered');
        deleteText.classList.remove('hideDeleteText');
    }
})

collage.addEventListener('mouseout', function (evt) {
    const img = evt.target;
    const innerDiv = img.parentElement;
    const memeDiv = innerDiv.parentElement;
    const deleteText = memeDiv.lastChild;

    if (evt.target.classList.contains('memeImage') === true) {
        innerDiv.classList.remove('hovered');
        deleteText.classList.add('hideDeleteText');
    }
})

collage.addEventListener('click', function (evt) {
    const img = evt.target;
    const innerDiv = img.parentElement;
    const memeDiv = innerDiv.parentElement;
    memeDiv.remove();
})