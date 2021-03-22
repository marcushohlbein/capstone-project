const axios = require('axios')
const cheerio = require('cheerio')

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const { SHOP3_NAME, SHOP3_BASE_URL, SHOP3_URL } = process.env

const parsedLinks = []
const pageLimit = 50
let pageCounter = 1

console.log(`\n  Scraping of ${SHOP3_URL} initiated...\n`)

const getProductLinks = async url => {
  try {
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)

    $('.products-grid > div').map((i, ProdLink) => {
      const link =
        SHOP3_BASE_URL + $(ProdLink).find('.product-image > a').attr('href')

      const metadata = {
        link: link,
      }
      parsedLinks.push(metadata)
    })
    const nextPageLink = SHOP3_URL + `?page=${pageCounter}`
    console.log(`  Scraping: ${nextPageLink}`)
    pageCounter++

    if (pageCounter === pageLimit) {
      parsedLinks.forEach((item, index) => {
        function randomTimeout(min, max) {
          return Math.floor(Math.random() * (max - min) + min)
        }

        setTimeout(() => {
          getProductData(item.link)
        }, randomTimeout(2500, 6000) * index)
      })
      return false
    }

    function randomTimeout(min, max) {
      return Math.random() * (max - min) + min
    }

    setTimeout(() => {
      getProductLinks(nextPageLink)
    }, randomTimeout(1000, 3000))
  } catch (error) {
    console.error(error)
  }
}

const getProductData = async url => {
  try {
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)

    $('body').map((i, el) => {
      const styleId = $(el).find('.brooklyn-sku > span').text().trim()
      const salesPrice = $(el)
        .find('.prices > .on-sale')
        .text()
        .replace('€', '')
        .trim()
      const regularPrice = $(el)
        .find(salesPrice ? '.prices > .compare-price' : '.prices > .price')
        .text()
        .replace('€', '')
        .trim()
      const sizes_eu = []
      const size = $(el)
        .find('.swatch > .swatch-element')
        .not('soldout')
        .each(function (i, size) {
          const item = $(size).text().trim()
          sizes_eu.push(item)
        })

      const metadata = {
        shopName: SHOP3_NAME,
        styleId: styleId,
        salesPrice: salesPrice,
        regularPrice: regularPrice,
        sizes_eu: sizes_eu,
        productLink: url,
      }
      createMerchant(metadata)
    })
  } catch (error) {
    console.error(error)
  }
}

const createMerchant = async data => {
  axios
    .post(`http://localhost:4000/api/v1/merchants/${data.styleId}`, data)
    .then(() => console.log(`${data.styleId} matched successfully!`))
    .catch(error => console.log(error))
}

getProductLinks(SHOP3_URL)
