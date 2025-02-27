// # Task 1
async function fetchData(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    
}

fetchData("https://api.github.com/users/hiteshverse");

// # Task 2
async function wait() {
    setTimeout( function () {
        console.log("Done ...");
    }, 2000);
}

wait();