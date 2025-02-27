let num = Math.floor(Math.random() * 100);
let guess;
let message = "Guess the Number: "

console.log(num)

do {
    guess = parseInt(prompt(message));
    if(guess > num){
        message = `The num is smaller than ${guess}`;
    } else {
        message = `The num is bigger than ${guess}`;
    }
} while(guess !== num);

alert(`Yes the ${num} is equal to your guess ${guess}`);