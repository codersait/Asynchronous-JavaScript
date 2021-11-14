const resource = '../data/data.txt';
function getText(resource, callback) {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback('error happened', undefined);
    }
  });

  request.open('GET', resource);
  request.send();
}

// function writeToDocument(value) {
//   console.log('callback fired');
//   console.log(value);
//   document.write(value)
// }

getText(resource, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    document.write(data);
    getText('../data/data1.txt', (err, data) => {
      console.log(data);
      getText('../data/data3.txt', (err, data) => {
        console.log(data);
      });
    });
  }
});
