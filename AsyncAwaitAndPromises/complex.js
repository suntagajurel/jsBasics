
let showGithubInfo = async () => {
  let response = await fetch('https://api.github.com/users/sunta');
  let data = await response.json();
  return data
}

showGithubInfo().then((data) => {
  console.log(data);
  let name = data.login;
  let noOfFollowers = data.followers;
  console.log(`your name is : ${name}`);
}).catch("you must have hit the wrong url");