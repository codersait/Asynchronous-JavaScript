// single thread - tek garson
// multi thread - birden fazla garson
console.log('Before');
getUser(1, (err, user) => {
  if (err) {
    console.error(err);
  } else {
    console.log('fetched user');
    getRepositories(user.gitHubUsername, (err, repos) => {
      if (err) {
        console.error(err);
      } else {
        console.log(repos);
      }
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

function getRepositories(gitHubUsername, callback) {
  setTimeout(() => {
    console.log('Calling Github API...');
    console.log(gitHubUsername);
    const data = [
      { username: 'codersait', repos: ['repo1', 'repo2'] },
      { username: 'yaman', repos: ['repo3', 'repo4'] },
      { username: 'harun', repos: ['repo5', 'repo6'] }
    ]
    const repos = data.find(user => user.username === gitHubUsername).repos
    if (repos) {
      callback(undefined, repos)
    } else {
      callback('cannot get repo', undefined)
    }

  }, 2000);
}


// getUser(2, (err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//     getUser(1, (err, user) => {
//       console.log(user);
//       getUser(3, (err, user) => {
//         console.log(user);
//         getUser(4, (err, user) => {
//           console.log(user);
//         })
//       })
//     })
//   }
// })