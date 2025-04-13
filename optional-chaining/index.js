// optional or conditional chaining 

const weather = {
    today_forcast: {
        morning: '19',
        evening: '12',
        night: '14'
    },

    getWeather: function() {
        return "it's sunny today"
    }
}

// console.log(weather.tommarrow_forcast.morning);


// if (weather.tommarrow_forcast != undefined) {
//     console.log(weather.today_forcast.morning);
// }

console.log(weather?.getWeather?.());
