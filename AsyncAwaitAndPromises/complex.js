
let showGithubInfo = async (name) => {
  let response = await fetch(`https://api.github.com/users/${name}`);
  let data = await response.json();
  return data
}

showGithubInfo('sunitagajurel').then((data) => {
  let name = data.login;
  let noOfFollowers = data.followers;
  console.log(`your name is : ${name}`);
}).catch("you must have hit the wrong url");