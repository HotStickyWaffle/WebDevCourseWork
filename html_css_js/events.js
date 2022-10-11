const btn = document.querySelector('#v2');

btn.onclick = function () {
    alert('You did it!')
}

function scream() {
    alert('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
}

btn.onmouseenter = scream;

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', function () {
    alert('You did it! AGAIN!')
})

function twist() {
    console.log('twist')
}
function shout() {
    console.log('shout')
}

const tasBtn = document.querySelector('#tas');

tasBtn.addEventListener('click', twist)
tasBtn.addEventListener('click', shout)