let str = "testing and learning all the and string methods."
let str1 = "a * b * c * d * e * c * f"

// since strings are immutable every string manipulations methods returns a new string in js 

// length is the property for finding length of a string, it's not a function 

console.log(str.length)


// console.log(str.indexOf("and"))

console.log(str.indexOf("s")) // return index for the first occurence of the substring
console.log(str.lastIndexOf("s")) // returns the index for the last occurence of the substring

console.log(str.slice(0, 6 +1 ))  // returns the sliced portion of a string 

console.log(str.substring(0, 6 + 1))


// since substring and slice do the same work but there's a major diff

console.log(str.slice(0, 7)) 
// if we add the first param greater than the second then it will just print and empty string 
console.log(str.slice(7, 0))

// but while using the substring method if the first param is greater than second then it will just swap the values

console.log("__________")
console.log(str.substring(0, 7))
console.log(str.substring(7, 0))  // values swapped 


console.log(str.replace("and", "checked")) // replaces the first occurence of a given char or string
console.log(str.replaceAll("and", "checked")) // replaces all the substring with the replaces string

console.log(str.split(" ")); // splits the string into substring by a given separator and return them as an array of substrings. 
// console.log(str1.split("*"));

console.log("__________")
const testStr = "          helolworld        "
console.log(testStr)
console.log(testStr.trim()) // removes whitespaces frm