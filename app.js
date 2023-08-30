'use strict'


const express = require('express');
const tasks = require('./routes/tasks')
const app = express();

require('dotenv').config();
require('./db/connect');
const PORT = 3000;

//middleware
app.use(express.json())

//routes
app.get('/test', (req, res) => {
  res.send(`test hit!`)
});


app.use('/api/v1/tasks', tasks);

app.listen(PORT, () => {
  
  console.log(`Task Manager App listening on port ${PORT}` );
});