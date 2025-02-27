// Array.push() --> The Array.push method append a element at the last of any Array
//                  Also returns the new length of the array 

let array = [1, 2, 3, 4];
// let n = array.push(8);

// console.log(`Array elements ${array} and length ${n}`);



// array.pop() --> The Array.pop() method remove the last element of the Array
                //    Also returns the popped/removed Element

let element = array.pop();
// console.log("Array after removing the last element: ", array);
// console.log("The removed element of the array: ", element);



// Array.shift() --> The array.shift() method removes the first element of the array
                    //  also returns the removed element 
let newArray = [5, 10, 15, 20, 25];
let firstElement = newArray.shift();

// console.log("Array after removing the first element : ", newArray);
// console.log("The first removed element of the array: ", firstElement);



// array.unshift() --> The array.unshift() method adds elements at the start of an array 
                        // also returns the new length of the array
let oneMoreArray = [2, 4, 6, 8, 10];
oneMoreArray.unshift(0, 1);
oneMoreArray.unshift("Hello");
// console.log(oneMoreArray + ' len: ' + oneMoreArray.length);



// The delete keyword is can be used for removing elements but it will not change the length of the array 
let thisArray = [3, 5, 6, 7];
delete thisArray[3];
// console.log(thisArray);



// The array.concat() method combines two or more arrays and returns the new combined array
// It will not modify the existing array
let strArray = ['A', 'B', 'C', 'D', 'E'];
let str2Array = [1, 2, 3, 4, 5];

let resArray = strArray.concat(str2Array);
console.log(strArray);
console.log(str2Array);
console.log(resArray);