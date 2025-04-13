// IIFE --> Immediately Invoked Function Expression

(function (a, b) {
    console.log(a + b)
})(2, 3);


((a, b) => console.log(a + b))(5, 10);


let val = (() => 100)();
console.log(val);



const data = (async() => await fetch())();