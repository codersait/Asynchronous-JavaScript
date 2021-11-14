function getRandomNumber(min, max, callback) {
  setTimeout(() => {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    callback(random)
  }, 1000);
}

function printNumber(num) {
  console.log(num);
}

getRandomNumber(1, 10, printNumber);
