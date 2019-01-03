let userImg = document.querySelector("#userImg");
let userName = document.querySelector("#userName");
let user;

// fetch GitHub user data
const getUser = () => {
  fetch("https://api.github.com/users/js-goose")
    .then((response) => {
      if (response.status !== 200) {
        return Promise.reject({
          status: response.status,
          statusText: response.statusText,
        });
      } else {
      return response.json()
      }
    })
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      if (error.status === 404) {
        let body = document.querySelector('body');
        body.innerHTML = `Oh no! There was an error of: ${error}`
        console.error("There was an error fetching the data: " + error)
      }
    });
};

getUser();

