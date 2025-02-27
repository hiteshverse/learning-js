// creating promises

// const promise = new Promise(function (resolve, reject) {
//   let something = true;
//   if (something) {
//     resolve('promise resolved');
//   } else {
//     reject('Error: Promise rejected')
//   }
// });

// promise
//   .then(value => console.log(value))
//   .catch(err => console.log(err))
//   .finally(() => console.log("promise fullfilled"))

// .then chaining
const p1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		console.log("resolved after 2 secs");
		resolve(56);
	}, 100);
});

p1.then(function (value) {
	console.log(value)
	let p2 = new Promise((resolve, reject) => {
		resolve('this is resolved');
	})

	return p2;
})
.then(function(prom) {
	console.log('this is the returned prmoie', prom);
	
})

console.log(p2);
