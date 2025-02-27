let elements = document.body.childNodes;

for(let items of elements) {
    // console.log(items);
}

// for iterables use only for of loop and for the objects and their properties use only for in loop

// DOM Collections

// Returns the parent node 
let parent = document.body.parentNode;
// console.log(parent);

// Return the left or previous sibling node
let previousSibling = document.body.previousSibling;
// console.log(previousSibling);

// Returns the right or next sibling node
let nextSibling = document.head.nextSibling;
// console.log(nextSibling);

// Returns a nodelist consisting of all the text, comment and element nodes
let check = document.head.childNodes;
// console.log(check);



// above we're accessing the dom with all nodes like text, comment and element nodes
// but sometimes we only have to work with the element nodes
// we can use some of these properties for that


// Returns the parent element 
let parentElm = document.body.parentElement;
// console.log(parentElm);

// Returns a html collection consisting only the direct child elements
let childElm = document.body.children;
// console.log(childElm);

// returns the previous element 
let leftElm = document.body.previousElementSibling;
// console.log(leftElm);

// returns the next element
let rightElm = document.head.nextElementSibling;
// console.log(rightElm);

// Returns the first direct child element
let firstElm = document.body.firstElementChild;
// console.log(firstElm);

// Returns the last direct child element
let lastElm = document.body.lastElementChild;
// console.log(lastElm);



// Worling with tables in dom

// accessing table 
let table = document.getElementsByTagName('table')[0];

// acessing table rows -- will return in a html collection 
console.log(table.caption);
console.log(table.rows);

console.log(table.tHead);
console.log(table.tFoot)

console.log(table.tBodies);



console.log('1'===1)



console.log(window.screenY)