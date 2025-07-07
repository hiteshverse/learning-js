const obj = {
    name: "Sharvan",
    age: 34,
    city: "Chandlodiya"
}


const keys = Object.keys(obj);      // returns a array of keys 
// console.log(keys);

const values = Object.values(obj);
// console.log(values)

const pairs = Object.entries(obj);
// console.log(pairs);                 // returns array of array where each array contains key and desired value

const check = Object.hasOwn(obj, "name");  // checks that a object has a given property name or not
// console.log(check); 

const other = Object.assign({}, obj, {newPropety: "yogesh"});  // copies all properties of obj object to a blank obj with a newProperty
// console.log(other);