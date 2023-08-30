
const mongoose = require('mongoose');

const connectionStr = process.env.DB_URL

mongoose.connect(connectionStr, {
  useNewUrlParser: true,
})
  .then(() => {
  console.log("mongoose connected")})
  .catch( (err) => {
  console.log(err)
});