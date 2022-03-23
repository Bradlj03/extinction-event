// fist create constants that will be used to link back to the html page. 
// Second We'll need to query ALL of the elements with querySelectorAll
// 'ol li'
// 'ul li'
// 'img'
// '#destroy-all'

const olTag = document.querySelectorAll('ol li');
const ulTag = document.querySelectorAll('ul li');
const imgTag = document.querySelectorAll('img');
const button = document.querySelector('#destroy-all');

//The first step is our ol. The li's in there should all have an event listener passed on to them that give them a line-through effect on them when they are clicked.
//  We'll need to use event and its property target to figure out which element was actually clicked. 
// target , is a property of an event which is a reference to the element upon which the event was fired.
// Just as 'target' means 'aiming at something', it's used to 'aim' at that particular element. This property gives us access to the properties of that element.
// the text decoration 'line-through' would accomplish the goal creating the line.
const strikeThrough = function (event) {
    event.target.style.textDecoration = 'line-through';
}

// the for loop below is taking every item with a 'ol li' tag and associating an event with a target. 

for (const line of olTag) {
    line.addEventListener('click', strikeThrough);
}

// In a previos assignment we made a line disappear 50%... This time I want to make it completely disappear. 

const lineDisapper = function (event) {
    event.target.style.opacity = 0;
}
for (const line of ulTag) {
    line.addEventListener('click', lineDisapper);
}

// if you want a image to disappear to can play with the height or width of the picture.
// changing the px of either of those elemenst will make an image disappear. 

const imgDisappear = function (event) {
    event.target.style.width = '0px';
    //event.target.style.height = '0px';
}

for (const area of imgTag) {
    area.addEventListener('click', imgDisappear);
}


const destroyAll = function() {
    for (const erase of olTag) {
        erase.style.opacity = 0;
    }
    for (const dino of imgTag) {
        dino.style.width = '0px';
        dino.style.height= '0px';
    }
}

button.addEventListener('click', destroyAll);