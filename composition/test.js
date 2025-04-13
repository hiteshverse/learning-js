function add(a, b) {
    return a + b;
}

function square(x) {
    return x * x;
}

function plusTwo(val) {
    return val + 2;
}

function divideTen(num) {
    return num / 10;
}

// function allFunc(a, b) {
//     return divideTen(plusTwo(square(add(a, b))));
// }

// console.log(allFunc(5, 2));


// function composeTwo(fn1, fn2) {
//     return function(a, b) {
//         return fn2(fn1(a, b));
//     }
// }

function compose(...fns) {
    return function (...values) {
        return fns.reduceRight((a, b) => b(a), values);
    }
}

// const compose = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

const cmp = compose(add, square);

const res = cmp([5, 4]);
console.log(res);

