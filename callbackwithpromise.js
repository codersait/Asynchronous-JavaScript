const promise = new Promise((resolve, reject) => {
  getRandomNumber(1, 10, resolve)

})

function getRandomNumber(min, max, callback) {
  setTimeout(() => {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    callback(random)
  }, 2000);
}
promise.then(data => console.log(data))