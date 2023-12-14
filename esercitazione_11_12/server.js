const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/CBR500R', (req, res) => {
  res.sendFile(__dirname + '/public/CBR500R.html');
});

app.get('/CB125R', (req, res) => {
  res.sendFile(__dirname + '/public/CB125R.html');
});

app.get('/CB650R', (req, res) => {
  res.sendFile(__dirname + '/public/CB650R.html');
});

app.get('/CB1000R', (req, res) => {
  res.sendFile(__dirname + '/public/CB1000R.html');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
