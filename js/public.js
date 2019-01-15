let userDataSection = document.querySelector(".user-data");
// const repos = fetch("https://api.github.com/users/js-goose/repos");
// const reposData = repos.json();

const getRepos = (async () => {
  try {
    const repos = await fetch("https://api.github.com/users/js-goose/repos");
    const reposData = await repos.json();
    console.log(reposData);
  } catch (error) {
    console.error(`There was an error fetching the data: ${error}`);
  }
})();

// getRepos();

const getUser = (async () => {
  try {
    const user = await fetch("https://api.github.com/users/js-goose");
    // const repos = await fetch("https://api.github.com/users/js-goose/repos");
    // const repoData = await repos.json();
    const userData = await user.json();
    console.log(userData);
    // console.log(repoData);
    const html = `
    <ul id="github-user-list">
      <li>GitHub Name: ${userData.name}</li> 
      <li><img src="${userData.avatar_url}"></li>
      <li>Public Repositories: ${userData.public_repos}</li>
    </ul>`;

    userDataSection.innerHTML = html;
  } catch (error) {
    console.error(`There was an error fetching the data: ${error}`);
  }
})();

// getUser();
