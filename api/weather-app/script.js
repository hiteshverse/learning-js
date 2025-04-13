const searchButtton = document.getElementById("searchButtton");
const cityInput = document.getElementById("cityInput");

const city = document.getElementById("city");
const time = document.getElementById("time");
const temp = document.getElementById("temp");

async function getData(cityName) {
    const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=79d78a4a02b24739b8e41605252903&q=${cityName}&aqi=yes`
    );
    
    return await res.json();
}

searchButtton.addEventListener("click", async function() {
    const value = cityInput.value;
    const result = await getData(value);

    console.log(result);
    
    city.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    time.innerText = `${result.location.localtime}`;
    temp.innerHTML = `${result.current.temp_c} &deg;C`;
});

