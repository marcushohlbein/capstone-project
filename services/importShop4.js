const axios = require('axios')
const cheerio = require('cheerio')

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const { SHOP4_NAME, SHOP4_URL } = process.env

const parsedLinks = []
const pageLimit = 42
let pageCounter = 2

console.log(`\n  Scraping of ${SHOP4_URL} initiated...\n`)

const getProductLinks = async url => {
  try {
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)

    $('.gridView > .productData').map((i, ProdLink) => {
      const link = $(ProdLink).find('a').attr('href')

      const metadata = {
        link: link.slice(0, link.indexOf('?')),
      }
      parsedLinks.push(metadata)
    })
    const nextPageLink = SHOP4_URL + `${pageCounter}/`
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
      const styleId = $(el).find('.itemCode').text().trim()
      const isSale = $(el).find('.sparprozent').text()
      const salesPrice = $(el)
        .find(isSale ? '.newprice' : '')
        .text()
        .replace('jetzt', '')
        .replace('€', '')
        .replace('*', '')
        .trim()
      const regularPrice = $(el)
        .find(isSale ? '.oldPrice > del' : '.newprice')
        .text()
        .replace('jetzt', '')
        .replace('€', '')
        .replace('*', '')
        .trim()
      const sizes_eu = []
      const size = $(el)
        .find('.groessenAuswahl > .groessenImg > .singleSize')
        .each(function (i, size) {
          const item = $(size)
            .find('a')
            .attr('data-alt')
            .replace('EU ', '')
            .trim()
          sizes_eu.push(item)
        })

      const metadata = {
        shopName: SHOP4_NAME,
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

getProductLinks(SHOP4_URL)
