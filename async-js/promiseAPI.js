const prom1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject("first resolve")
    }, 3000)
})
const prom2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject("second resolve")
    }, 1000)
})
const prom3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("third resolve")
    }, 2000)
})


// Promise.all
// Resolves: If all promises are resolved, returns their resolved values as an array.
// Rejects: If any one promise is rejected, the whole operation fails with the rejection reason of the first rejected promise.

// const promise_all = Promise.all([prom1, prom2, prom3]);
// promise_all.then(values => console.log(values));

// Promise.allSettled
// Resolves: When all promises settle, whether they are resolved or rejected.
// Never rejects: It always resolves, returning an array of objects with the status (fulfilled or rejected) and the corresponding value or reason.

// const promise_settled = Promise.allSettled([prom1, prom2, prom3]);
// promise_settled.then(values => console.log(values));

// Promise.race
// Resolves: If the first promise resolves, it returns the resolved value of that promise.
// Rejects: If the first promise rejects, it rejects with the rejection reason of that promise.
// The other promises (resolved or rejected) are ignored once the first settles.

// const promise_race = Promise.race([prom1,prom2, prom3]);
// promise_race.then(pro => console.log(pro));

// Promise.any
// Resolves: When any one promise resolves first, it returns the resolved value of that promise.
// Rejects: If all promises are rejected, it rejects with an AggregateError, which contains the rejection reasons for all promises.

const promise_any = Promise.any([prom1, prom2, prom3]);
promise_any.then(value => console.log(value));