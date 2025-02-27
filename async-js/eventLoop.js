setTimeout(() => console.log("inside the callback queue"), 1000);

Promise.resolve().then(() => console.log("inside the microtask queue"));

console.log("inside the call stack");