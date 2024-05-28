const express = require('express');
const app = express();
const port = 9001;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <div id="root"></div>
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('root').innerHTML = '<h1>Hello world</h1>';
          });
        </script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});