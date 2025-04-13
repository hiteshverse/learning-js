function add(a, b) {
    return a + b;
}

function multiply(args) {
    return args[0] * args[1];
}

function square(val) {
    return val * val;
}

function composeTwoFn(fn1, fn2) {
    return function(a, b) {
        return fn2(fn1(a, b));
    }
}

const composeFns = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

function compose(...args) {
    return function(...values) {
        return args.reduce((a, b) => b(a), values);
    }
}

const composeAll = (...args) => (...values) => args.reduce((a, b) => b(a), values);

const task = composeAll(multiply, square, function(val) {return val + 2});
console.log((task(5, 2)));
