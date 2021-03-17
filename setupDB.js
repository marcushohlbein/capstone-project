const mongoose = require('mongoose')

require('dotenv').config()
const { MONGODB_URL } = process.env

module.exports = function setupDB() {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to mongodb'))
    .catch(() => console.log('Connection to mongodb failed'))
}
