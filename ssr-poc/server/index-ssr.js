import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const App = () => <h1>Hello world</h1>;

const app = express();
const port = 9000;

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
