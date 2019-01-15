let userDataSection = document.querySelector(".user-data");

const getUser = async () => {
  try {
    const response = await fetch("https://api.github.com/users/js-goose");
    const data = await response.json();
    console.log(data);
    const html = `
    <ul id="github-user-list">
      <li>GitHub Name: ${data.name}</li> 
      <li><img src="${data.avatar_url}"></li>
      <li>Public Repositories: ${data.public_repos}</li>
    </ul>`;

    userDataSection.innerHTML = html;
  } catch (error) {
    console.error(`There was an error fetching the data: ${error}`);
  }
};

getUser();
