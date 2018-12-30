let userImg = document.querySelector("#user-img");

// fetch GitHub user data
const userData = fetch("https://api.github.com/users/js-goose")
  .then((response) => response.json())
  .then((response) => {
    userImg.innerHTML = `<img src=${response.avatar_url} height=100 width = 100 alt='user image of js-goose'>`
    console.log(response);
  })
  .catch((error) =>
    console.log("There was an error fetching the data: " + error)
  );


