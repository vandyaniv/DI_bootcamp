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
  readStat.textContent = book.alreadyRead + 'already Read ?';
  bookDiv.appendChild(readStat);

  theSection.appendChild(bookDiv);
});

// very ugly img lol will be better 
