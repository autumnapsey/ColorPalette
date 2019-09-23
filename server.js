const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, './build');
const HTML_FILE = path.join(DIST_DIR, './index.html');

let savedCart = [];

let colorsTotal = 0;

let uniqueHexCodes = [];

const getColors = num => {
  const hexLang = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  while (uniqueHexCodes.length < num) {
    let color = '#';
    while (color.length < 7) {
      color += hexLang[Math.floor(Math.random() * hexLang.length)];
    }
    if (!uniqueHexCodes.includes(color)) {
      uniqueHexCodes.push(color);
    }
  }
  return uniqueHexCodes;
};

app.use(express.static(DIST_DIR));
app.use(express.json({ limit: '1mb' }));
app.use(bodyParser.json());

app.post('/api/colors', (req, res) => {
  colorsTotal += req.body.num;
  res.send(getColors(colorsTotal));
});

app.post('/api/options', () => {
  colorsTotal = 0;
  uniqueHexCodes = [];
});

app.post('/api/cart', req => {
  savedCart = req.body.cart;
});

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.get('/cart', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port: ${port}`);
});
