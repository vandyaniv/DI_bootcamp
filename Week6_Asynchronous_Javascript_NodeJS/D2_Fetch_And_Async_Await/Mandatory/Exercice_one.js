//button-suprise 


// function Show_me_Gif(){
// fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')


// .then(result => {
// if(!result.ok){

//   throw new Error(' Error, an issu with the api or with network')
// }
// return result.json();
// })
// .them (data => {
  
// console.log(data);

// })
// .catch(Error => {
//   console.log('There was an error with the operation', Error);
// })

// }

// from here i will adapte to my page 


function Show_me_Gif(){
  fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
  
  
  .then(result => {

  if(!result.ok){
  
    throw new Error(' Error, an issu with the api or with network')
  }
  return result.json();
  })
  .then (data => {
    
  let Gif_url = data.data[0].images.downsized_medium.url;

  let img = document.createElement('img');
  img.src = Gif_url;

  let ZoneGify = document.getElementById('gif_zone');
ZoneGify.innerHTML = '';
ZoneGify.appendChild(img);
  
  })
  .catch(Error => {
    console.log('There was an error with the operation', Error);

    let ZoneGify = document.getElementById('gif_zone');
    ZoneGify.textContent = 'impossible to load Gif, try again ';
  })
  
 
  }
  const boutonSuprise = document.getElementById('button-suprise');
  boutonSuprise.addEventListener('click', Show_me_Gif);
  
  // its very bad i need to check later send all the time [ 0] same gif it not good 
  // first continue on other exercice then come back to this 


  function Show_meSunny() {
fetch('https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=U0RYjWpgulg76h3gC3wJIlgHH2CI8Kgi')

.then(result => {

  if (!result.ok){

  throw new Error ('Error, loading the api ')

  }
  return result.json();
})
.then( data =>{
console.log('information from a p i', data)
// other mistake the order 
  const Gif_container = document.getElementById('summer_gif_zone');
 Gif_container.innerHTML = '';


 data.data.forEach(gif => {
  const Gif_parttwoUrl = gif.images.downsized_medium.url;

  let img_partTwo = document.createElement('img');
  img_partTwo.src = Gif_parttwoUrl;
  img_partTwo.style.width = '200px';

  Gif_container.appendChild(img_partTwo);  
 })
}).catch(error =>{
  console.error(' Error Loading the GIF');
  document.getElementById('summer_gif_zone').textContent = ' impossible to load gif, try again'
});
  }


const button_Summer = document.getElementById('summer_btn');
button_Summer.addEventListener('click', Show_meSunny)

// other mistake should think better on the function part !!! only one at the time randoming every time + loading auto 


// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));


async function Getstarships() {
  try{
    const response = await fetch('https://www.swapi.tech/api/starships/9/');

    if (!response.ok){
      throw Error(`HTTP error a p i - STATUT -> ${response.status}`);
    }
  const StarWars_object = await response.json(); // check line 
  console.log(StarWars_object.result);
  } catch(error){
    console.log('Error Fetching the Data :', error);
  }

  
}

Getstarships();

// if i have time lets do something here !!!! 