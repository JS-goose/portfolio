const ghUserSection = document.querySelector("#github-user-list");

const getUser = async () => {
  try {
    const user = await fetch("https://api.github.com/users/js-goose");
    const userData = await user.json();
    const repos = await fetch("https://api.github.com/users/js-goose/repos");
    const reposData = await repos.json();
    console.log(userData);
    console.log(reposData);
    let repoNames = reposData.map((item) => {
      const html = `
        <li>
          <a href="${item.clone_url}" target="_blank">${item.name}</a>
        </li>
      `;
      return html;
    });
    const html = `
    <li><img src="${userData.avatar_url}"></li>
    <li>GitHub Name: <a href="${userData.html_url}" target="_blank">${userData.name}</a></li> 
    <li>Public Repositories: ${userData.public_repos}</li>
    <li>Followers: ${userData.followers}</li>
    <li>
      <details>
        <summary>All Public Repos</summary>
          <li>${repoNames.join(" ")}</li>
      </details>
    </li>
      `;

    ghUserSection.innerHTML = html;
  } catch (error) {
    console.error(`There was an error fetching the data: ${error}`);
  }
};

getUser();
