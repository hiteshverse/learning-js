const inputBox = document.getElementById("inputBox");
const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
let intId;

startBtn.addEventListener("click", function() {
    let val = inputBox.value;

    if(val) {
        intId = setInterval(function() {
            if(val >= 0) {
                timer.innerText = val;
                val--;
            } else {
                clearInterval(intId);
                alert("time up");
            }
        }, 1000);
    }
    inputBox.value = "";
})