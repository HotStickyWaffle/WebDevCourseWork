// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
// }

//YOU CAN COMBINE THE SEARCH ABILITIES OF THE DIFFERENT VERSIONS OF GETELEMENTBY WITH QUERYSELECTOR AND THE CSS ELEMENT SELECTORS

// document.querySelector('p') //SELECT BY ELEMENT TYPE (THIS WILL ONLY CALL THE FIRST ELEMENT OF THAT TYPE)
// document.querySelector('img: nth-of-type(2)') //COMBINE ELEMENT TYPE WITH OTHER CSS IDENTIFIERS TO FIND A SPECIFIC ELEMENT OF A CERTAIN TYPE
// document.querySelector('a[title="Java"]') //YOU CAN ALSO SELECT BY ATTRIBUTE (STILL ONLY THE FIRST MATCH)
// document.querySelector('#banner') //SELECT BY ID
// document.querySelector('.square') //SELECT BY CLASS
// document.querySelector('input[type="text"]')

// document.querySelectorAll('p') //USE TO SELECT ALL ELEMENTS OF A CERTAIN TYPE

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }
// ____________________________________________________________________________________________________________________________________________________________

// //SELECTING SPECIFIC ATTRIBUTES OF HTML ELEMENTS

// document.querySelector('p').innerText //SELECTS ALL THE TEXT CURRENTLY BEING DISPLAYED WITHIN AN ELEMENT
// document.querySelector('p').textContent //SEEMS SIMILAR,BUT SHOWS ALL CONTENT THAT APPEARS IN THE HTML MARKUP (EX. THINGS THAT ARE SET TO BE HIDDEN)

//THESE ONLY EFFECT THE TEXT, NOT THE HTML MARKUP

// const allLinks = document.querySelectorAll('a')

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK'+-
// }

// document.querySelector('p').innerHTML //THIS WILL GIVE YOU EVERYTHING, IN THE ELEMENT, INCLUDING THE HTML TAGS AND MARKUP, ALLOWING YOU TO MANIPULATE THAT

// ____________________________________________________________________________________________________________________________________________________________

//ACCESSING ATTRIBUTES

// ONE WAY

// document.querySelector('#banner').link
// document.querySelector('#banner').src
// document.querySelector('a').href
// document.querySelector('a').title


//THIS PULLS ITS VALUE FROM THE JAVASCRIPT OBJECT OF THE ELEMENT YOU'RE ACCESSING
// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOR

//.getAttribute('')
//THIS PULLS ITS VALUE DIRECTLY FROM THE HTML

// const firstLink = document.querySelector('a')

// firstLink.getAttribute('href')
// firstLink.getAttribute('class')
// firstLink.getAttribute('id')
// firstLink.getAttribute('title')

//MANIPULATING ATTRIBUTES

// firstLink.setAttribute('href', 'https://www.google.com/')

//THE FIRST ARGUMENT CALLS THE ATTRIBUTE, THE SECOND ONE IS THE CHANGE
//THIS CHANGES THE SELECTED ATTRIBUTE OF AN ELEMENT
//OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOR

// firstLink.href = 'https://www.google.com/'
//element.attribute = 'change'
// ____________________________________________________________________________________________________________________________________________________________

//STYLES

// const h1 = document.querySelector('h1')
// h1.style.fontSize = '3em'

// const allLinks = document.querySelectorAll('a')
// for (let link of allLinks) {
//     link.style.color = 'teal',
//         link.style.textDecorationColor = 'magenta',
//         link.style.textDecorationStyle = 'wavy',
// }

//element.style.color = style value
//element.style.fontSize = style value
//element.style.border = style value
//element.style.backgroundColor = style value

//THIS IS NOT IDEAL BECAUSE IT CREATES AN INLINE STYLE. ITS ALSO INCONVENIENT TO WRITE
//CHECK THE FINAL STYLES OF AN ELEMENT, WHICH COULD BE DEFAULT VALUES SET BY THE BROWSER

// window.getComputedStyle(allLinks).color
// window.getComputedStyle(allLinks).fontSize
// window.getComputedStyle(allLinks).fontFamily

//CLASSLIST

//YOU CAN USE classList TO SEE AND THEN LATER MANIPULATE THE CLASSES OF AN ELEMENT

// h2.classList
// h2.classList.add('class')
// h2.classList.remove('class')
// h2.classList.contains('class')
// h2.classList.add('class')
// h2.classList.toggle('class')

// .add WILL LET YOU ADD CLASSES TO AN ELEMENT WITHOUT REMOVING OTHER CLASSES
// .remove WORKS THE SAME WAY AS .add
// .contains WILL CHECK IF A PARTICULAR CLASS IS APPLIED TO AN ELEMENT
// .toggle WILL ADD OR REMOVE A CLASS, DEPENDING ON IF IT IS ALREADY THERE

// ____________________________________________________________________________________________________________________________________________________________

//TRAVERSING PARENT/CHILD/SIBLING

// element.parentElement
// element.parentElement.parentElement
//THIS LETS YOU ACCESS AND MANIPULATE THE PARENT OF AN ELEMENT

// element.childElementCount
// element.children
// element.children[indexnumber]
//THIS LETS YOU ACCESS AND MANIPULATE THE CHILD/CHILDREN OF AN ELEMENT.  SINCE ELEMENTS CAN HAVE MULTIPLE CHILDREN, YOU NEED TO SPECIFY IF YOU ONLY WANT A SINGLE CHILD

// element.nextSibling
// element.previousSibling
//THESE AFFECT THE NEXT NODE IN THE DOM

// element.nextElementSibling
// element.previousElementSibling
//THIS GIVES YOU THE NEXT SIBLING ON THE SAME LEVEL
// ____________________________________________________________________________________________________________________________________________________________

// CREATING NEW ELEMENTS

// document.createElement('type of element')
// THIS LETS YOU CREATE AN ELEMENT.  IF YOU ARE MAKING SOMETHING LIKE A PICTURE,
// YOU NEED TO SAVE THAT ELEMENT TO A VARIABLE TO ADD A SOURCE, OTHERWISE IT'S JUST AN EMPTY ELEMENT
//SO THE ELEMENT NEEDS TO FIRST BE CREATED, THEN FILLED WITH SOME CONTENT, THEN PLACED

//body.appendChild(element variable) -- (IN THIS EXAMPLE, 'BODY' IS AN EXAMPLE OF WHATEVER PARENT ELEMENT YOU'RE ADDING TO)
//THIS WILL ADD THE ELEMENT TO THE END OF THE PARENT ELEMENT

// element.append('content')
// element.preppend('content')

//THESE ALLOW YOU TO PLACE AN ELEMENT DIRECTLY TO THE BEGINING OR END OF AN ELEMENT (AFTER CREATING THE SHELL OF THE ELEMENT)

// targetElement.insertAdjacentElement(position, new placed element)
//          POSITIONS
//              'beforebegin'- before the target element
//              'afterbegin' - inside the target element, before it's first child
//              'beforeend' - insdie the target element, after it's last child
//              'afterend' - after the target element
// ____________________________________________________________________________________________________________________________________________________________

// REMOVING ELEMENTS
//WITH THIS, YOU SPECIFY THE PARENT ELEMENT OF THE ELEMENT YOU WANT TO REMOVE, CALL .removeChild, THEN THE SPECIFIC ELEMENT
//parentElement.removeChild(child)

//EX
// const firstLi = document.querySelector('li')
// const parentList = document.querySelector('ul')
// parentList.removeChild(firstLi)
// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOR
// const firstLi = document.querySelector('li')
// firstLi.parentElement.removeChild(firstLi)

//YOU CAN ALSO USE A NEW METHOD, .remove
// const firstLi = document.querySelector('li')
// firstLi.remove()