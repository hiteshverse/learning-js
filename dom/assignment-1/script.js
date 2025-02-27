// Accessing the div dom node

let divFirst = document.body.childNodes[1]; // since [0] refers to the text node 
let divSecond = document.body.firstElementChild;

console.log(divFirst);
console.log(divSecond);


// Accessing the ul dom node
let ulFirst = document.body.children[1]; // [0] refers to the div element
let ulSecond = divSecond.nextElementSibling;
console.log(ulFirst);
console.log(ulSecond);



//Accessing the second li from the ul
let secliFirst = ulFirst.lastElementChild;
// console.log(secliFirst);