const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5006;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  const { message } = req.body;
  res.json({ message: `I received your POST request. This is what you sent me: ${message}` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
