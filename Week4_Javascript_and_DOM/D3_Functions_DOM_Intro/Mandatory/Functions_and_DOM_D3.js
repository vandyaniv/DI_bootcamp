// Exercise 1: Find The Numbers Divisible By 23
let sum = 0;

for (let i = 0; i <= 500; i++) {
  if (i % 23 === 0) {
    console.log(i);
    sum += i;
  }
}

console.log('Sum :' + sum);

// Exercise 2: Shopping List
console.log('ex 2');

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

const shoppingList = ['banana', 'orange', 'apple '];

function myBill() {
  let total = 0;

  for (let item of shoppingList) {
    if (stock[item] > 0) {
      total += prices[item];
      stock[item] -= 1;
    }
  }
  return total;
}
console.log(myBill());

// Exercise 3: Hotel Cost (unfinished)
function hotelCost() {
  let nights;
  while (true) {
    nights = prompt(
      'How many nights do you want to stay at the hotel Mashala?',
    );
    // Step 2
  }
}

// Exercise 5: Modify Users
let containerDiv = document.getElementById('container');
console.log(containerDiv);

let peteItem = document.querySelector('li:nth-child(2)');
peteItem.textContent = 'Ricardo delavegado';

let del_li2 = document.querySelectorAll('ul')[1];
let secondLi = del_li2.querySelector('li:nth-child(2)');
del_li2.removeChild(secondLi);

let Bye_John = document.querySelectorAll('ul');

for (let ul of Bye_John) {
  let first_li = ul.querySelector('li:nth-child(1)');
  first_li.textContent = 'Yaniviator';
}

document.querySelectorAll('ul')[0].classList.add('student_list');
document.querySelectorAll('ul')[1].classList.add('university');

let div_Element = document.querySelector('div');
div_Element.style.backgroundColor = 'lightblue';
div_Element.style.padding = '10px';

let container_div = document.querySelector('#container');
let sec_ul = container_div.querySelectorAll('ul')[1];
let lastli = sec_ul.querySelector('li:last-child');
lastli.style.display = 'none';

// Exercise 6: Change the Navbar
navbar = document.getElementById('navBar');
navbar.setAttribute('id', 'socialNetworkNavigation');
console.log(navbar);

let ulEl = document.querySelector('#navBar ul');
let newLi = document.createElement('li');
let newLink_toli = document.createElement('a');
newLink_toli.textContent = 'new item ';
newLink_toli.href = '#';
newLi.appendChild(newLink_toli);
ulEl.appendChild(newLi);

console.log(navBar);

let ulEl2 = document.querySelector('#navBar, ul');
let newLi2 = document.createElement('li');
let logOutText = document.createTextNode('LogOut');
newLi2.appendChild(logOutText);
ulEl2.appendChild(newLi2);

let newlistItem = document.createElement('li');
let textNode = document.createTextNode('LogOut');
newlistItem.appendChild(textNode);
console.log(newlistItem);

let Ul_adding = document.querySelector('navBar, ul');
let into_ul = document.createElement('li');
let into_li = document.createTextNode('Logout');
into_ul.appendChild(into_li);
Ul_adding.appendChild(into_ul);

console.log(Ul_adding);

// Exercise 7: My Book List
let allBooks = [
  {
    title: "Sophie's World",
    author: 'Jostein Gaarder',
    image:
      'https://storymuseum.s3-assets.com/_1023x682_crop_center-center_80_none/1001_Sophie_sWorld.jpg',
    alreadyRead: true,
  },
  {
    title: 'In search of Lost Time',
    author: 'Marcel Proust',
    image: 'https://images4.penguinrandomhouse.com/cover/9780679645689',
    alreadyRead: true,
  },
];

console.log(allBooks);

let theSection = document.querySelector('.listBooks');

allBooks.forEach((book) => {
  let bookDiv = document.createElement('div');

  let title = document.createElement('h2');
  bookDiv.appendChild(title);

  let author = document.createElement('p');
  author.textContent = `author: ${book.author}`;
  bookDiv.appendChild(author);

  let image = document.createElement('img');
  image.src = book.image;
  bookDiv.appendChild(image);

  let readStat = document.createElement('p');
  readStat.textContent = book.alreadyRead + ' already Read ?';
  bookDiv.appendChild(readStat);

  theSection.appendChild(bookDiv);
});
