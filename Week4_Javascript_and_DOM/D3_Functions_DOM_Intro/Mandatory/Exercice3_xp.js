/* navbar = document.getElementById('navBar');

navbar.setAttribute('id', 'socialNetworkNavigation');

console.log(navbar);

console.log('test'); */

//exercice 6 ==> 3.1

let ulEl = document.querySelector('#navBar ul');

let newLi = document.createElement('li');
let newLink_toli = document.createElement('a');

newLink_toli.textContent = 'new item ';
newLink_toli.href = '#';

newLi.appendChild(newLink_toli);

ulEl.appendChild(newLi);

console.log(navBar);

// 3.2

let ulEl2 = document.querySelector('#navBar, ul');

let newLi2 = document.createElement('li');

let logOutText = document.createTextNode('LogOut');

newLi2.appendChild(logOutText);

ulEl2.appendChild(newLi2);

//3.3

let newlistItem = document.createElement('li');

let textNode = document.createTextNode('LogOut');

newlistItem.appendChild(textNode);
console.log(newlistItem);

// 3.4

let Ul_adding = document.querySelector('navBar, ul');

let into_ul = document.createElement('li');

let into_li = document.createTextNode('Logout');

into_ul.appendChild(into_li);

Ul_adding.appendChild(into_ul);

console.log(Ul_adding);

// Exercise 7 : My Book List
e

