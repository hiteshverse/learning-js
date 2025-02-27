// a callback is a function which is passed as a argument to another function.
// and the functions who's taking the function as a argument is called the higher order function.

// examples
// the printSomething() is taking another function as an argument so it's a higher order function
function printSomething(callbackFunc){
    callbackFunc();
}

function takingStringFromHere(){
    // console.log("This is a random String.");
}

printSomething(takingStringFromHere);  // the takingStringFromHere is passed as an argument so it's a callback function



// another example
function add(num1, num2, callback){
    let sum = num1 + num2;
    callback(sum);
}

function print(result){
    // console.log(result);
}

add(5, 10, print);



// callback hell or pyramid of doom 
function boilWater(callback) {
    setTimeout(function () {
      console.log("Water is boiled.");
      callback(); // Proceed to the next step
    }, 1000);
  }
  
  function addTeaLeaves(callback) {
    setTimeout(function () {
      console.log("Tea leaves are added.");
      callback(); // Proceed to the next step
    }, 500);
  }
  
  function addSugar(callback) {
    setTimeout(function () {
      console.log("Sugar is added.");
      callback(); // Proceed to the next step
    }, 500);
  }
  
  function serveTea() {
    setTimeout(function () {
      console.log("Tea is ready to serve!");
    }, 500);
  }
  
  // Nested Callbacks (Callback Hell)
  boilWater(function () {
    addTeaLeaves(function () {
      addSugar(function () {
        serveTea();
      });
    });
  });
  