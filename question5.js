// quetion no 5 
var request = require('request');
// let url = "https://api.chucknorris.io/jokes/random";
let url = "https://www.google.com";

let getChuckNorrisFact = (url) => {
  return new Promise(
    (resolve, reject) => {
      request.get(url, function(error, response, data){
        if (error) reject(error);
        console.log(response)
          
// let content = JSON.parse(data);
//         let fact = content.value;
        resolve(data);
      })
   }
 );
};

getChuckNorrisFact(url).then(
    data => console.log(data) // actually outputs a string
).catch(
   error => console.log(error)
);