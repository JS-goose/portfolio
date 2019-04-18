// GitHub user info section
const ghUserSection = document.querySelector('#github-user-list');
const getUser = async () => {
  try {
    const user = await fetch('https://api.github.com/users/js-goose');
    const userData = await user.json();
    const repos = await fetch('https://api.github.com/users/js-goose/repos');
    const reposData = await repos.json();
    let repoNames = reposData.map((item) => {
      const html = `
        <li>
        <strong>⇝</strong> <a href="${item.clone_url}" target="_blank">${item.name}</a>
        </li>
      `;
      return html;
    });
    const html = `
    <li><img src="${userData.avatar_url}" alt="jonathan sexton in a suit"></li>
    <li class="gh-items">GitHub Name: <a href="${userData.html_url}" target="_blank">${
      userData.name
    }</a></li> 
    <li class="gh-items">Followers: ${userData.followers}</li>
    <li class="gh-items">Following: ${userData.following}</li>
    <li class="gh-items">Public Repositories: ${userData.public_repos}</li>
    <li>
      <details>
        <summary>All Public Repositories - Click to see</summary>
          <ul role="list">
            <li>${repoNames.join(' ')}</li>
          </ul>
      </details>
    </li>
      `;

    ghUserSection.innerHTML = html;
  } catch (error) {
    console.error(`There was an error fetching the data: ${error}`);
  }
};
// Function call to get GitHub user data
getUser();

// Light / dark mode selection
const modeBtn = document
  .querySelector('#light-dark-mode-container')
  .addEventListener('click', function() {
    const everything = document.querySelectorAll('*');
    const projectTiles = document.querySelectorAll('.project-tile-overlay');
    everything.forEach((item) => {
      item.classList.toggle('dark');
      item.style.transition = 'all 0.3s';
    });

    projectTiles.forEach((item) => {
      item.classList.remove('dark');
    });
  });

// Typeform button function
(function() {
  var qs,
    js,
    q,
    s,
    d = document,
    gi = d.getElementById,
    ce = d.createElement,
    gt = d.getElementsByTagName,
    id = 'typef_orm_share',
    b = 'https://embed.typeform.com/';
  if (!gi.call(d, id)) {
    js = ce.call(d, 'script');
    js.id = id;
    js.src = b + 'embed.js';
    q = gt.call(d, 'script')[0];
    q.parentNode.insertBefore(js, q);
  }
})();
