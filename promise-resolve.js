function getRandomNumber(min, max) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let random = Math.floor(Math.random() * (max - min + 1) + min);
      resolve(random)
    }, 1000);
  })
  console.log(promise);
  return promise;
}

function printNumber(num) {
  console.log(num);
}

getRandomNumber(1, 10).then(data => {
  printNumber(data)
})
// getRandomNumber(1, 10).then(printNumber)