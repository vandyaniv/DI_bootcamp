const letters = ["x", "y", "z", "z"];

function checkLetters() {
  const counts = {};
  for (const num of letters) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return counts;
}

console.log(checkLetters());

const count = letters.reduce((total, item) => {
  // console.log(total, item);
  return total[item] ? ++total[item] : total[item] = 1, total;
}, {});

console.log(count);
