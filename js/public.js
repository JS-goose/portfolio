let userDataSection = document.querySelector('.user-data');

const getUser = async () => {
  try {
  const response = await fetch("https://api.github.com/users/js-goose");
  const data = await response.json();
  const html = `<h1>GitHub Name: ${data.name}</h1> <img src="${data.avatar_url}">`

  userDataSection.innerHTML = html;
  console.log(data);
  } catch(error) {
    console.error(`There was an error fetching the data: ${error}`);
  }
};

getUser();