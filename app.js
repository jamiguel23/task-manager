'use strict'


const express = require('express');
const app = express();

const PORT = 3000;

app.get('/test', (req, res) => {
  res.send(`test hit!`)
});

app.listen(PORT, () => {
  
  console.log(`Task Manager App listening on port ${PORT}` );
});