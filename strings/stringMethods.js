let word = 'string methods';

// length is the property for finding the length of any object in js
// console.log(word.length);

// console.log(word.toUpperCase());
// console.log(word[5]);
console.log(word.slice(2, 5));
console.log(word.slice(6));


console.log(word.replace('string', 'array'));
console.log(word.concat(" are", " defined", " here"));
console.log(word + " are" + " defined" + " here");
console.log("       hello               world                ".trim());


let str = "hello";
str[0] = 'f';
console.log(str);