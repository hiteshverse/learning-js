// iterator pattern 
// generator functions in js
// yield keyword in js

// example of a custom iterator

// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     let nextIndex = start;
//     let iterationCount = 0;

//     const rangeIterator = {
//         next() {
//             let result;
//             if (nextIndex < end) {
//                 result = { value: nextIndex, done: false };
//                 nextIndex += step;
//                 iterationCount++;
//                 return result;
//             }
//             return { value: iterationCount, done: true };
//         },
//     };
//     return rangeIterator;
// }

// let it = makeRangeIterator(1, 10, 1);

// let res = it.next();


// while(!res.done) {
//     console.log(res.value);
//     res = it.next();
// }


// yield keyword use in js 
// only used inside generator functions 


// generator functions
// generator that js loops can use for iterating on objects  
// generators functions are defined using the function* syntax


// function* count() {
//     yield 2;
//     yield 4;
//     yield 6;
//     yield 8;
//     yield 10;
//     yield 12;
// }

// console.log(count());

// const even = count();

// for(const v of even) {
//     console.log(v);
// }


function* makeRangeIteratorNew(start, end, stepSize) {
    for(let i = start;i <= end; i += start) {
        yield i;
    }
}

const one = makeRangeIteratorNew(1, 10, 2);

for(const a of one) {
    console.log(a);
}