// try {
//     console.log(hello);
// } catch (error) {
//     console.log(error);

// }


//  console.log("hello World");

// try catch runs syncronously so it cannot handle scheduled tasks

setTimeout(function () {
    console.log("hello");

}, 3000);

setTimeout(function () {
    console.log("sec World");

}, 1000);

setTimeout(function () {
    try {
        console.log(k);

    } catch (error) {
        console.log(error);
    }
}, 2000);