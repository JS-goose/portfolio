let userDataSection = document.querySelector(".user-data");

const getUser = async (cb) => {
  try {
    const user = await fetch("https://api.github.com/users/js-goose");
    const userData = await user.json();
    const repos = await fetch("https://api.github.com/users/js-goose/repos");
    const reposData = await repos.json();
    console.log(userData);
    console.log(reposData);
    let repoNames = reposData.map((item)=> {
      console.log(item.name)
      return item.name
    });
    // console.log(reposData);
    const html = `
    <ul id="github-user-list">
      <li>GitHub Name: ${userData.name}</li> 
      <li><img src="${userData.avatar_url}"></li>
      <li>Public Repositories: ${userData.public_repos}</li>
      <li><details>${repoNames}</details></li>
    </ul>`;

    userDataSection.innerHTML = html;
  } catch (error) {
    console.error(`There was an error fetching the data: ${error}`);
  }
};

getUser();
