const axios = require('axios')
const Product = require('../models/Product')

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const { SNEAKER_DB_URL } = process.env

const shopUrl = SNEAKER_DB_URL
const pageLimit = 313
let pageCounter = 0

const getProducts = async url => {
  axios
    .get(url)
    .then(res => {
      const products = res.data.results
      products
        .filter(product => product.retailPrice !== '' || null || undefined)
        .filter(product => product.styleId !== '' || null || undefined)
        .filter(product => product.media.imageUrl !== null || undefined)
        .filter(product => product.media.smallImageUrl !== null || undefined)
        .filter(product => product.media.thumbUrl !== null || undefined)
        .filter(
          product =>
            !product.media.imageUrl.includes('New-Product-Placeholder-Default')
        )
        .map(product => {
          const metadata = {
            styleId: product.styleId,
            brand: product.brand,
            model: product.shoe,
            color: product.colorway,
            gender: product.gender,
            releaseDate: product.releaseDate,
            retailPrice: product.retailPrice,
            sale: false,
            shops: [],
            media: {
              imageUrl: product.media.imageUrl,
              thumbUrl: product.media.thumbUrl,
            },
          }
          createProduct(metadata)
        })
      const nextPageLink = shopUrl + `&page=${pageCounter}`
      pageCounter++

      if (pageCounter === pageLimit) {
        return false
      }

      function randomTimeout(min, max) {
        return Math.random() * (max - min) + min
      }

      setTimeout(() => {
        getProducts(nextPageLink)
      }, randomTimeout(1000, 5500))
    })
    .catch(error => console.log('Fetching products failed: ', error))
}

const createProduct = async data => {
  axios
    .post('http://localhost:4000/api/v1/products', data)
    .then(() =>
      console.log(`${data.model} (${data.styleId}) fetch successfully!`)
    )
    .catch(error => console.log(error))
}

getProducts(shopUrl)
