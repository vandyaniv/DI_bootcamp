// to long to made cell by html or css

let div = document.querySelector('#board');
for (let i = 1; i <= 1440; i++) {
  let child = document.createElement('div');

  child.style.border = '1px solid black';
  child.style.backgroundColor = 'white';

  div.append(child);
}

let color = document.querySelector('container-element');

/* il faut que je creer 
- cell color 
21 color 
onclick to cell child 
give the color chosed on the 21 color the color choosed*/