// takes a json string and converts it into a js object

const jsstr = '{"name": "Hello", "age": 34, "city": "PUna"}';
const res = JSON.parse(jsstr);

console.log(typeof jsstr);
console.log(typeof res);


// takes a js object and convert it's into a json string
const obj = {
    hello: "343",
    age: "334",
    city: 3
}

const fdf = JSON.stringify("./data.json");
console.log(fdf, typeof fdf)
console.log(obj, typeof obj)