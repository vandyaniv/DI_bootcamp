/*console.log('Hello, Node.js!');

const people = ['Greg', 'Mary', 'Devon', 'James'];

console.log(people);

// node script.js //

people.shift();
console.log(people);

people[3] = 'Jason';
console.log(people);

people.push('yaniv');
console.log(people);

//people.push('Alexandro')//

const index_of_x_or_y = people.indexOf('Mary');
console.log(index_of_x_or_y);
// here its zero because i delet the first and still on that conf

console.log(people);
// 🧩
const slicing = people.slice(1, 3);
console.log(slicing);

const find_foo = people.indexOf('Foo');
console.log(find_foo);
// mean value not find = not here

const last = people[people.length - 1];
console.log(last);

console.log(people);

for (let i = 0; i < people.length; i++) console.log(people[i]);

//for (let i = 0; i < people.length; i++) console.log(people[Devon]);

/*for (let i = 0; i < people.length; i++) {
  console.log(people[i] === 'Devon'})

\
EXERCICE NUMBER 2 */

/*const My_color = ['blue', 'red', 'green', 'purple', 'white'];

for (let i = 0; i < My_color.length; i++) {
  console.log(`My choice ${i + 1} is ${My_color[i]}`);
} */

// exercice 3

/*let number;

prompt('please enter a number bigger than 10');

do {
  number = Number(prompt('please enter a number bigger than 10 or egal '));
} while (number < 10);
console.log(' Congragultion you enter the ${number}');*/

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ['Sarah', 'Dan', 'David'],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

console.log(building);

console.log(
  `the number of the flor on the building is ${building.numberOfFloor}`,
);

console.log('number of floor :', building.numberOfFloor);

console.log(
  `Number of appartement on the first floor : ${building.numberOfAptByFloor.firstFloor}`,
);

console.log(
  `Number of appartement on the third floor : ${building.numberOfAptByFloor.thirdFloor}`,
);

console.log(
  `the segond  is  ${building.nameOfTenants[1]}, and ${building.numberOfRoomsAndRent.dan[0]} in his appartement`,
);

/* 
exercice 5 */

const big_family = {
  father: 'Paulo',
  mother: 'Clariss',
  child: 'elnino',
  pet: 'perito',
};

for (let key in big_family) {
  console.log(`key : ${key}`);
}

/* Exercise 6 : Rudolf */

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer',
};

let sentence = '';

for (let key in details) {
  sentence += `${key} ${details[key]}`;
}

console.log(sentence.trim());
