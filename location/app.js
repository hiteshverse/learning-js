const button = document.getElementById("btn");

async function getData(latitude, longitude) {
    const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=79d78a4a02b24739b8e41605252903&q=${latitude}, ${longitude}&aqi=yes`
    );

    return await res.json();
}


async function gotLocation(position) {
    const result = await getData(position.coords.latitude, position.coords.longitude);   
    console.log(result);
}

function failedToGetLocation(error) {
    console.log("there was some issue", error);
} 

button.addEventListener("click", async function() {
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGetLocation);
});


