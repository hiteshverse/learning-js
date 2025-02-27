// function check(callback) {
//     console.log('first');

//     setTimeout(function () {
//         console.log('second');
//     }, 3000);
//     callback();
//     console.log('third');
// }

// function doSomething() {
//     console.log('sync task');
// }

// check(doSomething);


// function firstTask(callback1) {
//     setTimeout(() => {
//         console.log("First task done!");
//         callback1();
//     }, 1000);
// }

// function secondTask(callback2) {
//     setTimeout(() => {
//         console.log("Second task done!");
//         callback2();
//     }, 1000);
// }

// firstTask(() => {
//     secondTask(() => {
//         console.log("All tasks done!");
        
//     });
// });



console.log('1');

setTimeout(function s1() {
    console.log("first timeout");
}, 3000);

console.log('2');

Promise.resolve().then(function p1() {
    console.log('first promise resolved');
});

function check() {
    console.log('check called');
}

check();

