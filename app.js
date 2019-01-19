/* let requestURL = 'https://randomuser.me/api/';
let request = new XMLHttpRequest();
request.open('GET', requestURL)
request.responseType = 'json';
request.send();

console.log(request.responseText);

 */

var block = document.getElementById('block');

fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
       let arr = data.results;
       arr.forEach(element => {
           console.log(element);
       });
       /* for(var key in data.results[0].name)  
        alert(data.results[0].name.first + ' ' + data.results[0].name.last ); */
    });