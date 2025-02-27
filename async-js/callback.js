// Promise -->
// let prom =  new Promise((resolve, reject) => {
//     resolve(56);
// });

// console.log("Start...");
// setTimeout(function() {
//     console.log('middlware...')
// }, 3000);

// console.log("End...");
// console.log(prom);


// resolving and rejecting promises -->
// let prom2 = new Promise((resolve, reject) => {
//     console.log("Promise is pending...");
//     setTimeout( () => {
//         console.log("Promise fullfilled...")
//         resolve("calling the then() method...");
//     }, 3000);
// })


// uthna hai, brush krna hai, nahana hai, khana khana hai, so jana hai;



function wakeUp(callback) {
    console.log("I wake up");
    callback();
    
}

function brush(callback) {
    console.log("Going to brush");
    callback();
}

function bath(callback) {
    console.log("Going to took a bath");
    callback();
}

function eat(callback) {
    console.log("I'm Hungry");
    callback();
}

function sleep(callback) {
    console.log("Good NIght");
    callback();
}

wakeUp(function(){
    brush(
        function(){
            bath(function(){
                eat(
                    function() {
                        sleep(function() {
                            console.log("All task finished")
                        })
                    }
                )
            })
        }
    )
});