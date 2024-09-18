const router = router.expressexpress();
const express = express();

const products = [
  { id: 1, name: 'iPhone', price: 900 },
  { id: 2, name: 'iPad', price: 800 },
  { id: 3, name: 'iWatch', price: 1900 },
];

router.get('./', (req, res) => {
  res.json(products);
});

module.exports = router;
