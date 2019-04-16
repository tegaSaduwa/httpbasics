// document.getElementById('button').addEventListener('click', loadData);

// function loadData() {
  
//   //create a xhr object
//   const xhr = new XMLHttpRequest();  

//   xhr.open('GET', 'data.txt', true);

//   xhr.onload = function () {
//     if(this.status === 200) {
     
//      document.querySelector('#output').innerHTML =  `<h2> ${this.responseText} </h2>`;
//     }
//   }

//   xhr.send();

// }

//callback functions

const posts = [
  {title:'post one', body:'this is post one'},
  {title:'post two', body:'this is post two'}
]
//WITHOUT CALLBACKS
// function createPost (post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

// function getPost () {
//   setTimeout(() => {
//    let output= '';
//    posts.forEach((post) =>{
//     output += `<li>${post.title}</li>`
//    });
//    document.body.innerHTML= output;
//   }, 1000);
// }

// createPost({title:'post three', body:'this is post three'});
// getPost();

//CALLBACKS

// function createPost (post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// function getPost () {
//   setTimeout(() => {
//    let output= '';
//    posts.forEach((post) =>{
//     output += `<li>${post.title}</li>`
//    });
//    document.body.innerHTML= output;
//   }, 1000);
// }

// createPost({title:'post three', body:'this is post three'}, getPost);
// getPost();


//promises


function createPost (post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
        const error = false;
        if(!error) {
          resolve();
        }else {
          reject('error: something went wrong')
        }
      
    
    }, 2000);
  });
  
}

function getPost () {
  setTimeout(() => {
   let output= '';
   posts.forEach((post) =>{
    output += `<li>${post.title}</li>`
   });
   document.body.innerHTML= output;
  }, 1000);
}

createPost({title:'post three', body:'this is post three'})
.then(getPost)
.catch((err) => console.log(err) );

























