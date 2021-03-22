const axios = require('axios')
const cheerio = require('cheerio')

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const { SHOP1_NAME, SHOP1_URL, SHOP1_BASE_URL } = process.env

const parsedLinks = []
const pageLimit = 80
let pageCounter = 1

console.log(`\n  Scraping of ${SHOP1_URL} initiated...\n`)

const getProductLinks = async url => {
  try {
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)

    $('.row > div > .productListing > li')
      .not('.soldout')
      .map((i, ProdLink) => {
        const link =
          SHOP1_BASE_URL + $(ProdLink).find('.pQuickView > a').attr('href')

        const metadata = {
          link: link,
        }
        parsedLinks.push(metadata)
      })
    const nextPageLink =
      SHOP1_URL + `/page/${pageCounter}/sort/relevance/perpage/36`
    console.log(`  Scraping: ${nextPageLink}`)
    pageCounter++

    if (pageCounter === pageLimit) {
      parsedLinks.forEach((link, index) => {
        function randomTimeout(min, max) {
          return Math.floor(Math.random() * (max - min) + min)
        }

        setTimeout(() => {
          getProductData(link.link)
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
      const styleId = $(el).find('.suppliernumber > span').text().trim()
      const salesPrice = $(el)
        .find('.pPrice > .newPrice')
        .text()
        .replace('€', '')
        .trim()
      const regularPrice = $(el)
        .find(salesPrice ? '.pPrice > .oldPrice' : '.pPrice > span')
        .text()
        .replace('€', '')
        .replace('*', '')
        .trim()
      const sizes_EU = []
      const size = $(el)
        .find('.selectVariants > .customSelectBox > option:not(.disabled) ')
        .each(function (i, size) {
          const link = $(size).text().trim().split(' ')
          link[1] !== 'EUR'
            ? sizes_EU.push(link[0] + ' ' + link[1])
            : sizes_EU.push(link[0])
        })

      const metadata = {
        shopName: 'SHOP1_NAME',
        styleId: styleId,
        salesPrice: salesPrice,
        regularPrice: regularPrice,
        sizes_eu: sizes_EU.slice(1),
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

getProductLinks(SHOP1_URL)
