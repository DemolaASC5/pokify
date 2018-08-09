const urlpoke = "https://pokeapi.co/api/v2/pokemon/1/"; 
const urlyoutube = ""
const urlrandom = "https://randomuser.me/api/?results=1"; 
let urlpoke_new; 
let urlrandom_new; 
let number;
myFunction(); 
// myFunction2(); 

function myFunction(){
    button = document.createElement("BUTTON"); 
    button.setAttribute("id","pokibutton"); 
    button.innerText = "Time to Click on This PoKiButton";
    document.body.appendChild(button);  
//     pokename= document.createElement("p");
//     pokename.setAttribute("id","pokemonname");
//     pokename.innerText= pokemon;
//     document.body.appendChild(pokename); 
// const button = document.querySelector('#pokibutton');
button.addEventListener('click', clickListener);  
}

function clickListener(event){
    number = Math.round(Math.random()*151);
    urlpoke_new = urlpoke.replace(1,number);
    urlrandom_new = urlrandom.replace(1,number);  
    fetchWork1();
    fetchWork2();  
    console.log(urlpoke_new);     
}

function fetchWork1(){
    fetch(urlpoke_new)
        .then(function(response){
            return response.json();
        }).then(function(json) {
            console.log(json);
            data = json; 
            createPokemon(); 
        }).catch(function(error) {
            console.log(error);
        });
}

function fetchWork2(){
    fetch(urlrandom_new)
        .then(function(response){
            return response.json(); 
        }) .then(function(json){
            data2 = json; 
            createRandomUsers(); 
        })
}    

function createPokemon(){
    // console.log(data);
    const pokemon = data.forms[0].name; 
    pokepic1 = data.sprites.front_default; 
    pokename= document.createElement("p");
    pokename.setAttribute("id","pokemonname");
    pokename.innerText= pokemon;
    pokepic = document.createElement('img'); 
    pokepic.setAttribute("id",'pokepic');
    pokepic.src = pokepic1; 
    // const pokemon_img1 = data.sprites.back_shiny; 
    // pokemon_img = document.createElement("img")
    // pokemon.setAttribute("id", "pokemonimage"); 
    // pokemon_img.src = pokemon_img1; 
    // document.body.appendChild(pokemon_img); 
    document.body.appendChild(pokename); 
    document.body.appendChild(pokepic); 
    const div_user1 = document.querySelector('#pokemon_everything'); 
    div_user1.appendChild(pokename); 
    div_user1.appendChild(pokepic);

    // const pokemonbox = document.querySelector('#pokemon div'); 
    // pokemonbox.appendChild(pokename); 
}

function createRandomUsers(){
    const user = data2.results[number-1].name.first + data2.results[number-1].name.last;
    const userpic1 = data2.results[number-1].picture.large;  
    userpic = document.createElement('img'); 
    userpic.setAttribute("id", "profile_pic");     
    userpic.src = userpic1; 
    username = document.createElement('p'); 
    username.setAttribute("id", "name"); 
    username.innerText = user; 
    document.body.appendChild(username); 
    document.body.appendChild(userpic); 
    const div_user = document.querySelector('#user'); 
    div_user.appendChild(username); 
    div_user.appendChild(userpic); 
}
// function start() {
//     // 2. Initialize the JavaScript client library.
//     gapi.client.init({
//       'apiKey': 'AIzaSyDNwaZ9CN5t6H5P4MRfbz_OgAWeuh0hN04',
//       // Your API key will be automatically added to the Discovery Document URLs.
//       'discoveryDocs': ['https://people.googleapis.com/$discovery/rest']
//     }).then(function() {
//       // 3. Initialize and make the API request.
//       return gapi.client.people.people.get({
//         'resourceName': 'people/me',
//         'requestMask.includeField': 'person.names'
//       });
//     }).then(function(response) {
//       console.log(response.result);
//     }, function(reason) {
//       console.log('Error: ' + reason.result.error.message);
//     });
//   };
//   // 1. Load the JavaScript client library.
//     gapi.load('client', start);