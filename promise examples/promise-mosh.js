// * produce a promise(new Promise(resolve,reject)) and consume it with then() and catch()
// ? initial state-> pending to fulfilled(resolved) or 
// ? resolve() -> pending to fulfilled(resolved)
// ? reject()  -> pending to rejected

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from a database...');
      const database = [{ id: 1, gitHubUsername: 'codersait' }, { id: 2, gitHubUsername: 'yaman' }, { id: 3, gitHubUsername: 'harun' }]
      const user = database.find(user => user.id === id)
      if (user) {
        resolve(user)
      } else {
        reject(new Error('The id does not match..'))
      }
    }, 2000);
  })
}

function getRepositories(gitHubUsername) {
  return new Promise((resolve, reject) => {
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
        resolve(repos)
      } else {
        reject(new Error('cannot get repo'))
      }
    }, 2000);
  })
}

getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => console.log(repos))
  .catch(err => console.error(err.message))

// * Creating Settled Promises with Promise static methods

const p1 = Promise.resolve({ id: 1, gitHubUsername: 'codersait' });
p1.then(user => console.log(user.gitHubUsername))

const p2 = Promise.reject(new Error('reason for rejection'))
p2.catch(err => console.error(err))

// Parallel Promises -> Multiple asynchronous operations start in the same time


const p3 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 1....');
    resolve(1)
  }, 2000);
})
const p4 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 2....');
    resolve(2)

  }, 2000);
})
// waits all promises to be resolved
// hepsi fulfilled olduktan sonra Promise.all([p3, p4]) promisi fulfilled kabul edilir
// if one of them is rejected, Promise.all([p3, p4]) rejected
Promise.all([p3, p4])
  .then(result => console.log(result))
// .catch(err => console.log(err.message)) // biri bile reject yese hata donuyor

// eger biri fulfilled olursa , Promise.race() fulfilled olmus kabul edilir
Promise.race([p3, p4])
  .then(result => console.log(result))