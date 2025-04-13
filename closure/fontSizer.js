const text = document.getElementById("text");
const btn = document.getElementById("btn");

console.log(text, btn);


function fontSizer(size) {
    function sizeIncrease() {
        text.style.fontSize = `${size}px`;
    }

    return sizeIncrease;
}


const size10px = fontSizer(10);
const size20px = fontSizer(20);


btn.addEventListener("click", size20px);
