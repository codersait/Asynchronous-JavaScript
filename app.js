// single thread - tek garson
// multi thread - birden fazla garson
console.log('Before');
getUser(2, (err, user) => {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
    getUser(1, (err, user) => {
      console.log(user);
      getUser(3, (err, user) => {
        console.log(user);
        getUser(4, (err, user) => {
          console.log(user);
        })
      })
    })
  }
})

console.log('After');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    const database = [{ id: 1, gitHubUsername: 'codersait' }, { id: 2, gitHubUsername: 'yaman' }, { id: 3, gitHubUsername: 'harun' }]
    const user = database.find(user => user.id === id)
    if (user) {
      callback(undefined, user)
    } else {
      callback('The id does not match..', undefined)
    }
  }, 2000);
}

