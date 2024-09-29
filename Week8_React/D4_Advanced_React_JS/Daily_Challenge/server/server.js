const express = require('express');
const app = express();
const PORT = 3006;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Helly Ho From express' });
});

app.post('/api/world', (req, res) => {
  const input = req.body.input;
  res.send({ message: `I received your POST request. This is what you sent me: ${input}` });
});
app.listen(PORT, () => {
  console.log(`SERVER is Running on ${PORT}`);
});
