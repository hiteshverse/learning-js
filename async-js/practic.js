const fetchData = new Promise(function (resolve, reject) {
  let message = "Fetched Data Successfully";
  setTimeout(function () {
    resolve(message);
  }, 2000);
});


fetchData
  .then(function (value) {
    console.log(value);

    const anotherPromise = new Promise(function (resolve, reject) {
      let message = "Processing Complete";
      setTimeout(function () {
        resolve(message);
      }, 1000);
    });

    return anotherPromise;
  })
  .then(function (anotherValue) {
    console.log(anotherValue);
  });