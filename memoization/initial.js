const cache = new Map();


const getFunction = (n) => {
    if(cache.has(n)) {
        return cache.get(n);
    }


    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    
    cache.set(n, sum);
    return sum;
}

console.time();
console.log(getFunction(5));
console.timeEnd();
console.log("*****");
console.time();
console.log(getFunction(5));
console.timeEnd();



