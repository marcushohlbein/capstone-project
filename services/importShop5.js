const axios = require('axios')
const cheerio = require('cheerio')

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const { SHOP5_NAME, SHOP5_URL } = process.env

const parsedLinks = []
const pageLimit = 4
let pageCounter = 1

console.log(`\n  Scraping of ${SHOP5_URL} initiated...\n`)

const getProductLinks = async url => {
  try {
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)

    $('#listProduct > div').map((i, el) => {
      const link = $(el).find('article > a').attr('href')

      const metadata = {
        link: link,
      }
      parsedLinks.push(metadata)
    })
    const nextPageLink = SHOP5_URL + `&page=${pageCounter}`
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
      const styleId = $(el)
        .find('#productdetailinfo-collapse > ul > li > em')
        .text()
        .replace('Art.Nr.:', '')
        .trim()
      const salesPrice = $(el)
        .find('.product--price > .def-typo-discount')
        .text()
        .replace('€', '')
        .trim()
      const regularPrice = $(el)
        .find(
          salesPrice
            ? '.product--price > .def-price-old'
            : '.product--price > .u-nobr'
        )
        .first()
        .text()
        .replace('€', '')
        .replace('*', '')
        .trim()
      const sizes_eu = []
      const size = $(el)
        .find('.site-nav > ul > li > .def-js-flyout-closer')
        .each(function (i, element) {
          const item = $(element).children().remove().end().text().trim()
          sizes_eu.push(item)
        })

      const metadata = {
        shopName: SHOP5_NAME,
        styleId: styleId,
        salesPrice: salesPrice,
        regularPrice: regularPrice,
        sizes_eu: sizes_eu.filter(Boolean),
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

getProductLinks(SHOP5_URL)
