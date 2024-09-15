import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = 5002;
app.use('/', express.static(path.join(__dirname, 'public')));

const emojis = [
  { Character: '😁', name: 'very happy' },
  { Character: '🥷', name: 'ninja' },
  { Character: '🤯', name: 'bug face' },
  { Character: '🧛🏻‍♂️', name: 'Dracula' },
  { Character: '😎', name: 'smilling with class' },
];

let correctomoji = null;

function getRandomoji() {
  correctomoji = emojis[Math.floor(Math.random() * emojis.length)];

  let theOption = [correctomoji];

  while (theOption.length < 4) {
    const randomojis = emojis[Math.floor(Math.random() * emojis.length)];
    if (!theOption.includes(randomojis)) {
      theOption.push(randomojis);
    }
  }

  theOption = theOption.sort(() => Math.random() - 0.5);
  return { correctomoji, theOption };
}

app.get('/emoji-game', (req, res) => {
  const { correctomoji, theOption } = getRandomoji();
  res.json({ character: correctomoji.Character, options: theOption });
});

app.post('/check-guess', express.json(), (req, res) => {
  const { guess } = req.body;
  if (correctomoji.name === guess) {
    res.json({ correct: true, message: 'Correct!' });
  } else {
    res.json({ correct: false, message: 'Wrong! Try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
