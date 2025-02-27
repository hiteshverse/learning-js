// // practice problem 1 and 2
// let array = [];
// let element;

// while(true){
//     element = parseInt(prompt("Enter a Num: "));
//     if(element === 0){
//         break;
//     }
//     array.push(element);
// }


// console.log(array);


// let sec = [];
// 
// let item;
// 
// do{
    // item = parseInt(prompt("Enter a num: "));
    // sec.push(item);
// } while(item !== 0);
// 
// console.log(sec);


// let arr = [10, 1, 4, 20, 30, 5343, 330];
// 
// let resArray = arr.filter(element => element % 10 === 0);
// 
// console.log(resArray);


let array = [1, 2, 4, 5, 6, 7, 8, 9, 10];

let resArray = array.map(item => item * item);
console.log(resArray);