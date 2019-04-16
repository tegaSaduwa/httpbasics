document.getElementById('button').addEventListener('click', getApi);

function getApi() {
  fetch('https://api.github.com/users')
  .then((res) => res.json() )
  .then((data) => {
   let output= '';
   data.forEach((user) =>{
    output += `<li>${user.login}</li>`;
   });
   document.getElementById('output').innerHTML= output;
    }
    
  )
  .catch((err) => console.log(err));
}