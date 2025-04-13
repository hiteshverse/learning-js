const submitBtn = document.querySelector("#submit-btn");
const username = document.getElementById("username");
const uname = document.getElementById("name")


submitBtn.addEventListener("click", function (event) {
    let name = username.value;
    localStorage.setItem(`user`, name);

    

    username.value = "";
});


window.addEventListener("load", function () {
    let user = localStorage.getItem("user");
    uname.textContent = user;
})