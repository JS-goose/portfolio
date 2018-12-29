// fetch GitHub user data
fetch("https://api.github.com/users/js-goose")
  .then((response) => response.json())
  .then((response) => console.log(response));
