let userImg = document.querySelector("#user-img");
let user;

// fetch GitHub user data
const userData = fetch("https://api.github.com/users/js-goose")
  .then((response) => response.json())
  .then((response) => {
    user = response;
  })
  .catch((error) =>
    console.log("There was an error fetching the data: " + error)
  );


setTimeout(()=> {
  console.log(user.login)
  userImg.innerHTML = `<img src=${user.avatar_url} height=100 width = 100 alt='user image of js-goose'>`
}, 500);