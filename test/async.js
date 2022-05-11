const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve("I have succeded :)");
    }, 1000);
  } else {
    setTimeout(() => {
      reject("I have failed :(");
    }, 1000);
  }
});

myPromise
  .then((value) => console.log(value))
  .catch((rejectValue) => console.log(rejectValue));
