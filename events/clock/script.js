let val = document.getElementById('dateBlock')
let time = () => {
    let currentDate = new Date();
    let hrs = currentDate.getHours();
    let mins = currentDate.getMinutes();
    let secs = currentDate.getSeconds();
    val.style.fontSize = '40px';
    val.textContent = `${Math.min(hrs - 12, hrs)} : ${mins} : ${secs}`
}

setInterval(time, 1000);