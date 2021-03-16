const express = require('express')
const setupDB = require('./setupDB')
const Product = require('./models/Product')
require('dotenv').config()
const { PORT = 4000 } = process.env

setupDB()
const app = express()

app.use('/', express.json())

app.get('/api/v1/products', async (req, res, next) => {
  res.json(await Product.find().catch(next))
})

app.get('/api/v1/products/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await Product.findById(id).catch(next))
})

app.listen(PORT, () => {
  console.log(`Server listen at http://localhost:${PORT}`)
})
