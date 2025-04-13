function adder(num) {
    function add(b) {
        console.log(num + b);
    }

    return add;
}

let check = adder(10);
console.log(check);

check(5);