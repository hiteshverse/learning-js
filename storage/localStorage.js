const form = document.querySelector("form");
const username = document.getElementById("username");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = username.value;
    localStorage.setItem("user", name);

    username.value = "";
});


window.addEventListener("load", function () {
    let user = localStorage.getItem("user");
    document.getElementById("name").textContent = user;
})