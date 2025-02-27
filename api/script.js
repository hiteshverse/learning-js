console.log("hello");


// Get Request
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })

const data = {
    title: "Title",
    body: "body",
    id: 1000
}

//Post Request
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json"
    }
})
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        
    })