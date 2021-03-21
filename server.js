const express = require('express')
const setupDB = require('./setupDB')
const Product = require('./models/Product')

require('dotenv').config()
const { PORT = 4000 } = process.env

const app = express()

setupDB()
app.use('/', express.json())

app.get('/api/v1/products', async (req, res, next) => {
  res
    .status(200)
    .json(await Product.find({ 'shops.0': { $exists: true } }).catch(next))
})

app.get('/api/v1/products/:styleId', async (req, res, next) => {
  const { styleId } = req.params
  res.status(200).json(await Product.findOne({ styleId: styleId }).catch(next))
})

app.post('/api/v1/merchants/:styleId', async (req, res, next) => {
  const { styleId } = req.params
  const { shopName, salesPrice, regularPrice, sizes_EU, productLink } = req.body
  res.status(200).json(
    await Product.findOneAndUpdate(
      { styleId: styleId },
      {
        $push: {
          shops: {
            shopName: shopName,
            salesPrice: salesPrice,
            regularPrice: regularPrice,
            sizes_EU: sizes_EU,
            productLink: productLink,
          },
        },
      },
      { new: true, useFindAndModify: false }
    ).catch(next)
  )
})

app.post('/api/v1/products', async (req, res, next) => {
  res.status(200).json(await Product.insertMany(req.body).catch(next))
})

const server = app.listen(PORT, () => {
  console.log(`Server listen at http://localhost:${PORT}`)
})

module.exports = server
