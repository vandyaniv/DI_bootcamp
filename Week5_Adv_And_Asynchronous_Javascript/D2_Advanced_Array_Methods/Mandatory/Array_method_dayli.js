
const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

//  Part I 🌟
// function getCarHonda(carInventory) {
//   let hondacar = null;

//   carInventory.forEach(car => {
//     if (car.car_make === 'Honda') { 
//       hondacar = car;
//     }
//   });

//   if (hondacar) {
//     return `This is a ${hondacar.car_make} ${hondacar.car_model} from ${hondacar.car_year}.`;    
//   }
// }

// console.log(getCarHonda(inventory));


//   🌟Part II

// function sortCarInventoryByYear(carInventory){
//   carInventory.sort(function(a, b){
//     return a.car_model - b.car_model;
//   });
// };

// console.log(sortCarInventoryByYear(inventory));

// function sortCarInventoryByYear(carInventory) {
//   car_inventory.sort(a, b) {

//   }
// }


////////////////////🌟 📌  Daily challenge : Go Wildcats 🌟 📌 //////////////

const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
 ];

//  Part I 🌟

// let usernames = [];

//  gameInfo.forEach(element => {
//   usernames.push(element.username + ' ' + '!');

  
//  });

//  console.log(usernames);

//   🌟Part II

// const winner = [];

// gameInfo.forEach(element => {
//   if (element.score > 5);
//   winner.push(element.username);

  
// });

// console.log(winner);

// //   🌟Part I I I

// const sum_score = gameInfo.reduce((acc, val) => {
//   return acc + val.score;
// })

// console.log(sum_score)

