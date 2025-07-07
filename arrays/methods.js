// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()


let arr = [3, 4, 34, 34, 23, 12, 5, 300];          // add new elements to the end of the array and returns the new length
// console.log(arr.push(50))
// console.log(arr)

// let check = arr.pop();       // removes the last elements from the array and returns the removed element
// console.log(check);
// console.log(arr);


// let fdf = arr.fill("***"); // fill array with given value from start to end position and return the modified array;
// console.log(fdf);
// console.log(arr)

// const a = arr.shift();  // removes the first element from the element and returns it 
// console.log(a);
// console.log(arr)


// const b = arr.unshift(5, 30, 34);   // insert element at the start of the array and returns the new length
// console.log(b);
// console.log(arr);

// const c = arr.splice(4, 2);          // delete the array elements starting from a given position/ and returns a array containing the deleted elements
// console.log(c);
// console.log(arr);

// const d = arr.slice(0, 3);  // returns the sliced portion of a array with given start and end positions
// console.log(d);
// console.log(arr);

// const e = arr.concat([1, 3, 5, 3, 5]);             // returns a new array by placing the element to the end of the array without modyfying the original ones
// console.log(e)
// console.log(arr)

// const f = arr.reverse(); // reverse the original array and return a reference to the same array
// console.log(f);
// console.log(arr);

// function print(value) {
//     console.log(value)
// }

// // array high order functions 
// // arr.forEach(print)             // calls the callback fn for the each array element: cb takes value, index, and array as the input


// const a = arr.map(print)
// console.log(a)

// const dfd = arr.map(val => console.log(val * 2));       // calls a callback fn for ech element and returns a new array containing those returned elements 

// console.log(dfd);
// console.log(arr)


// const hhh = arr.filter(function(value) {      // accepts a callaback function which shows a condition where if any condition is true for any element it will include in the new returned array 
//     return value > 100;
// })

// console.log(hhh)
// console.log(arr)


// const red = arr.reduce( (sum, val) => {
//     return sum += val;
// })

// console.log(red)
// console.log(arr)


const fact = [1, 2, 3, 4, 5];
// let res = fact.reduce(function(f, curr) {         // oreturn a single result based on the doing operations with the initial value, and the current value
//     return f = f * curr;
// })

// console.log(fact)
// console.log(res)

// const kkdfk = fact.find(value => value > 3);    // takes a callback which finds a single value based on the given condition and then returns it
// console.log(kkdfk)
// console.log(fact)


// const add = arr.sort(); // sorts and array and returns the ref to the modified array also takes a cb which can be used to determine the order of the elements
// console.log(add)
// console.log(arr)

const dfdf = arr.sort(function(a, b) {
    return b - a;
})

console.log(dfdf)
console.log(arr)