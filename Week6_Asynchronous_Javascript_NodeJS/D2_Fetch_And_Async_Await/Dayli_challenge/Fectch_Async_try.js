document.getElementById('Gify_form').addEventListener('submit', async function (event) {
 event.preventDefault();
 
 
 const Category = document.getElementById('Category_input').value;

 const Api_Key = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
 const Api_url = `https://api.giphy.com/v1/gifs/random?api_key=${Api_Key}&tag=${Category}&rating=g`;

 try{


  const response = await fetch (Api_url);
  const data = await response.json();

  const Gif_url = data.data.images.downsized_medium.url;

  const GIF_container = document.getElementById('GIF_CONTAINER');

  const gifDiv = document.createElement('div');
  gifDiv.style.display = 'flex';
  gifDiv.style.alignItems ='center';
  gifDiv.style.marginBottom = '10px';
  

  const GifImg = document.createElement('img');
  GifImg.src = Gif_url;
  GifImg.style.width = '200px';
  GifImg.style.margin = '10px';
  GifImg.style.padding = '10px';

const Delete_btn = document.createElement('button');
Delete_btn.style.padding = '5px 10px ';
Delete_btn.textContent = 'Delete';
Delete_btn.style.color = 'white'
Delete_btn.style.cursor = 'pointer';
Delete_btn.textContent = 'Delete';
Delete_btn.style.background = 'black';



Delete_btn.addEventListener('click', function(){gifDiv.remove();})



gifDiv.appendChild(GifImg);
gifDiv.appendChild(Delete_btn);
GIF_container.appendChild(gifDiv);
 } catch(error){console.log('Error fetching', error )}
});


document.getElementById('delete_all').addEventListener('click', function (){document.getElementById('GIF_CONTAINER').innerHTML = ''; })

