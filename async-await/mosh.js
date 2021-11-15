// promise based solution
getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => console.log(repos))
  .catch(err => console.error(err.message))

// async await based solution
async function displayRepos() {
  try {
    const user = await getUser(1)
    const repos = await getRepositories(user.gitHubUsername)
    console.log(repos);
  } catch (error) {
    console.log(error);
  }
}
displayRepos()