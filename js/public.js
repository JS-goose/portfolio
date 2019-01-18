const rp = require('request-promise');
const cheerio = require('cheerio');
const Table = require('cli-table');

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
        <strong>⇝</strong> <a href="${item.clone_url}" target="_blank">${item.name}</a>
        </li>
      `;
      return html;
    });
    const html = `
    <li><img src="${userData.avatar_url}"></li>
    <li class="gh-items">GitHub Name: <a href="${userData.html_url}" target="_blank">${userData.name}</a></li> 
    <li class="gh-items">Followers: ${userData.followers}</li>
    <li class="gh-items">Following: ${userData.following}</li>
    <li class="gh-items">Public Repositories: ${userData.public_repos}</li>
    <li>
      <details>
        <summary>All Public Repositories - Click to see</summary>
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
