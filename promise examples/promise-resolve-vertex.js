function getRandomNumber(min, max) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let random = Math.floor(Math.random() * (max - min + 1) + min);
      resolve(random)
    }, 1000);
  })
  return promise;
}

function printNumber(num) {
  console.log(num);
}
// * then() bir parametreli bir function bekler ve promise'den done degeri o functiona yollayip calistirir
// * Functional programming de kulanilir.
getRandomNumber(1, 10).then(printNumber)