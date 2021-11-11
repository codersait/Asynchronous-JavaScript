function getOddRandomNumber(min, max) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let random = Math.floor(Math.random() * (max - min + 1) + min);
      if (random % 2 !== 0) resolve(random)
      else reject(`The number ${random} is even`)
      resolve(random)
    }, 1000);
  })
  return promise;
}

function printNumber(num) {
  console.log(num);
}

function printRejectMsg(msg) {
  console.error(msg)
}

getOddRandomNumber(1, 10)
  .then(printNumber)
  .catch(printRejectMsg)
