const express = require('express')
const setupDB = require('./setupDB')
const Product = require('./models/Product')
const getDbQuery = require('./lib/getDbQuery')

require('dotenv').config()
const { PORT = 4000 } = process.env

const app = express()

setupDB()
app.use('/', express.json())
app.use(express.static('./client/build'))
app.use(require('./routes/error'))

app.get('/api/v1/products/', async (req, res, next) => {
  const dbQuery = getDbQuery(req.query)
  res.status(200).json(await Product.find(dbQuery).limit(48).catch(next))
})

app.get('/api/v1/products/:styleId', async (req, res, next) => {
  const { styleId } = req.params
  res.status(200).json(await Product.findOne({ styleId: styleId }).catch(next))
})

app.post('/api/v1/merchants/:styleId', async (req, res, next) => {
  const { styleId } = req.params
  const { shopName, salesPrice, regularPrice, sizes_eu, productLink } = req.body
  res.status(200).json(
    await Product.findOneAndUpdate(
      { styleId: styleId, 'shops.shopName': { $ne: shopName } },
      {
        $push: {
          shops: {
            shopName: shopName,
            salesPrice: salesPrice,
            regularPrice: regularPrice,
            sizes_eu: sizes_eu,
            productLink: productLink,
          },
        },
      },
      { new: true, useFindAndModify: false }
    ).catch(next)
  )
})

app.post('/api/v1/products', async (req, res, next) => {
  res
    .status(200)
    .json(await Product.findOneAndUpdate(req.body, { upset: true }).catch(next))
})

const server = app.listen(PORT, () => {
  console.log(`Server listen at http://localhost:${PORT}`)
})

module.exports = server
