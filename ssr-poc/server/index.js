const express = require('express');
const app = express();
const port = 9001;

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});