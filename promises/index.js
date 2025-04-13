// Synchronous tasks
// on the spot available, top to bottom synced

// asynchronous tasks
// tasks that will be executed later
// basically returns a promise 
// let data;

// async function getData() {
//     data = await fetch("https://jsonplaceholder.typicode.com/posts");
//     console.log(data);
// }

// getData();

// console.log("called before data");


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        console.log(response);  // Response object
        return response.json(); // Returns a Promise
    })
    .then(data => {
        console.log(data); // Parsed JSON data
    })
    .catch(error => console.error("Error:", error))
    .finally(function() {
        console.log("finally all done");
    })
