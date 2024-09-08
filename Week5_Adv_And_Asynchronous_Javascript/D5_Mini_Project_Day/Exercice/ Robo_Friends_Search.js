const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/9?200x200'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/10?200x200'
  }
  ];


  /*
  object = 
  id 1
  name = string 
  email string
  img - http ( method action )
  */

  // object : [ key ; value ]



  // 🧩 puzzling 
/* 
je veux catch id par id le mettre dans div 
name -> h
email -> p
https -> img 
object ---> div.
*/

//part one 
// console.log(robots[1].name)

class My_object {
  constructor (robots){
    this.robots = robots;
  }

  display_item(){
    const cards = document.querySelectorAll('.Card');

    this.robots.forEach((robot, index) => {
      const card = cards[index];
      if (card){

const img = document.createElement('img');
img.src = robot.image;



// img 

const img_container = document.createElement('div');
img_container.classList.add('circular-image');
img_container.appendChild(img)

        const h1 = document.createElement('h2');
        h1.textContent = robot.name;

        const p = document.createElement('p');
        p.textContent = robot.email;

        card.appendChild((img_container))
        card.appendChild(h1);
        card.appendChild(p);
      }
      console.log(` Name : ${robot.name} email : ${robot.email} `);  
    });
  }
}

const myObject = new My_object(robots);
// console.log(` Name : ${robots[0].name} email : ${robots[0].email} `);

myObject.display_item();








// console.log(robots[2].name)

// // let texte = robots[2].name; 
// // document.getElementById("card_one").innerHTML = texte; 

// function Create_one (){

//   const cardOneDiv = document.getElementById("card_one");
  
//   let into_div = document.createElement('h2');
//     into_div.innerText = robots[3].name;
//     into_div.style.color = 'red';
//     cardOneDiv.appendChild(into_div);

//   let another_test = document.createElement('p');
//   another_test.innerHTML = robots[3].email;
//   another_test.style.color = 'black';
//   cardOneDiv.appendChild(another_test);

//   let another_forimg = document.createElement('img');
//   another_forimg.innerHTML = robots[3].image;
  


//   };
  
// Create_one();
// function pushing_that(){

// const createone = document.getElementById('one');


// const find_it = robots.find(robot => robot.id === 3);

// if ( find_it === 3 ){
//   createone.innerHTML = 
//   `'<h2>' + ${find_it.name} + '</h2>' +
//   '<br>' + '<p>' + ${find_it.email} + '</p>'`
// }else{

//   console.log('test bad ')
// }

// };

// pushing_that()
  //  lets try that !!!


//   function first_div (){
//  const show_the_first = robots;
//  document.getElementsByClassName('Card'[0]);

//  const one = document.getElementById('one');
//  const  one_find = robots.find( robots => robots.id === 1);
//  {
//  }if (one_find){
//   const create_it = 
//  }
//   };

//   first_div()

// function pushing_one (){

// const first = document.getElementsByClassName('Card' [0]);
// const segonc = robots.find( robots.id = 3);

// if (segonc === 3){
// first.createElement('div')
// }

// };

