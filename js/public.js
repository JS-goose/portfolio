let userImg = document.querySelector("#userImg");
let userName = document.querySelector("#userName");
let user;

// fetch GitHub user data
const userData = fetch("https://api.github.com/users/js-goose")
  .then((response) => response.json())
  .then((response) => {
    user = response;
    // userImg.innerHTML = `User Image: <img src=${user.avatar_url} height=100 width = 100 alt='user image of js-goose'>`
  })
  .catch((error) => console.log("There was an error fetching the data: " + error));

setTimeout(() => {
  console.log(user.login);
  userImg.innerHTML = `User Image: <img src=${
    user.avatar_url
  } height=100 width = 100 alt='user image of js-goose'>`;
}, 1500);
