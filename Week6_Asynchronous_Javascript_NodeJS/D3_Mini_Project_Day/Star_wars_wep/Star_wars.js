const backgroundBody = document.body;
backgroundBody.style.background = 'url(https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif)'

backgroundBody.style.backgroundSize = 'cover';
backgroundBody.style.backgroundRepeat = 'no-repeat';


// const title = document.createElement('h1');
// title.textContent = 'STAR WARS';
// title.style.color = 'white';
// document.body.appendChild(title);





async function Show_meRandom() {
try {


  const api_url = 'https://www.swapi.tech/api/people';

const loading = document.getElementById('loading')

loading.style.display = 'block';
  const response = await fetch(api_url); 
  
if (!response.ok){
  throw new Error ('Error from the A P I ')
}

const data = await response.json()
console.log('API data :', data);

// the issu here 

const results = data.results || data;
if (!results || !results.length){
 throw new Error('No result found') ; 
}

const Randomor = results[Math.floor(Math.random() * results.length)];
console.log('Randomor', Randomor);

if (!Randomor || !Randomor.url){
  throw new Error ('Randomor or properties are undefined')
}

const CharactereResponse = await fetch(Randomor.url);
if (!CharactereResponse.ok){

  throw new Error("Error !!! Error Fetching CharactereDetails");
  
}



const CharactereData = await CharactereResponse.json();
const CharactereDetails = CharactereData.result.properties;
console.log('CharactereDetails', CharactereDetails);

const { name, height, gender, birth_year, homeworld} = CharactereDetails;


const homeworldResponse = await fetch(homeworld);
const homeworldData = await homeworldResponse.json();
const homeworldName = await homeworldData.result.properties.name;



const title = document.createElement('h1');
title.innerHTML = `Name: <br>${name}`;
title.style.color = 'red';

const details = document.createElement('p');
details.innerHTML = `height : ${height} <br>
gender : ${gender} <br> 
birth_year : ${birth_year} <br>
homeworld : ${homeworldName}
`;


const Container = document.querySelector('.element_container');
Container.innerHTML = '';
Container.appendChild(title);
Container.appendChild(details);

}catch(error){console.log('Error from API :', error );}finally{
  loading.style.display = 'none';
}
  
} 


document.getElementById('Button_generate').addEventListener('click', Show_meRandom);


console.log('test');

