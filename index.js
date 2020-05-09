const express = require('express');

// create a new Express Instance
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log('Server started and listening on port 3000!'));