/* 
 <!--Learning DOM Events-->
  <!--🌟 Exercise 1 : Change The Article-->
  */

//1.1
let get_h = document.querySelector('h1');
console.log(get_h);

//1.2 remove
//let remov_article = document.getElementsByTagName('article')[0];
//remov_article.remove();

//1.3

let H_two_color = document.querySelector('h2');
H_two_color.addEventListener('click', function () {
  H_two_color.style.backgroundColor = 'red';
});

let Hidding = document.querySelector('h3');
Hidding.addEventListener('click', function () {
  Hidding.style.display = 'none';
});

let Html_changer = document.querySelector('article');2
