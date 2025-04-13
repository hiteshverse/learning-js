const weather = {
    current_temp: undefined,
}

// let val = weather.current_temp

// if(!val) {
//     val = "20C";
// }

const val = weather.current_temp ?? "20";

console.log(val);