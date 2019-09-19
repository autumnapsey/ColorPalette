const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, './build');
const HTML_FILE = path.join(DIST_DIR, './index.html');
const colors = {
  colors: [
    '#000000',
    '#FFFFFF',
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#BADA55',
    '#F5F5F5',
    '#AD328F',
  ],
};

app.use(express.static(DIST_DIR));
app.get('/api/colors', (req, res) => {
  res.send(colors);
});
app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
