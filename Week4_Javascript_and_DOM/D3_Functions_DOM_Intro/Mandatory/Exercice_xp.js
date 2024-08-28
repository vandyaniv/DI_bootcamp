/*let sum = 0;

for (let i = 0; i <= 500; i++) {
  if (i % 23 === 0) {
    console.log(i);
    sum += i;
  }
}

console.log('Sum :' + sum);
*/

// ex 2//
console.log(' ex 2');

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



function hotelCost() {
  let nights;  // nbr = x 
  while (true) { // while x is true 
    nights = prompt(' How many night do you want to stay at the hotel Mashala ?');
    // step 2//

  }
}

// ex 5

