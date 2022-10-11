const form = document.querySelector('#shelterForm')
const input = document.querySelector('#catName')
const list = document.querySelector('#cats')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const catName = input.value;
    const newLi = document.createElement('LI');
    newLi.innerText = catName;
    list.append(newLi);
    input.value = '';
}
)


// const cat = document.createElement('li')

// list.addEventListener('submit', function () {
//     document.list.appendChild
// })