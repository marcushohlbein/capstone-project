const axios = require('axios')
const cheerio = require('cheerio')

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const { SHOP2_NAME, SHOP2_URL } = process.env

const parsedLinks = []
const pageLimit = 28
let pageCounter = 1

console.log(`\n  Scraping of ${SHOP2_URL} initiated...\n`)

const getProductLinks = async url => {
  try {
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)

    $('.listing--container > .listing > div')
      .not('.fadeoutnostock')
      .map((i, ProdLink) => {
        const link = $(ProdLink)
          .find('.box--content > .product--info > a')
          .attr('href')
          .slice(0, -6)

        const metadata = {
          link: link,
        }
        parsedLinks.push(metadata)
      })
    const nextPageLink = SHOP2_URL + `?p=${pageCounter}`
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
        .find('.product--header > div > div > .product--title-addition')
        .text()
        .trim()
        .split(' ')
        .join('-')
      const salesPrice = $(el)
        .find('.price--discount > .price--content')
        .text()
        .replace('€', '')
        .replace('*', '')
        .trim()
      const regularPrice = $(el)
        .find(
          salesPrice
            ? '.content--discount > .price--line-through'
            : '.price--default > span'
        )
        .text()
        .replace('€', '')
        .replace('*', '')
        .trim()
      const sizes_eu = []
      const size = $(el)
        .find('.variant--group > .variant--option')
        .each(function (i, size) {
          const item = $(size).find('.option--label').text().trim()
          sizes_eu.push(item)
        })

      const metadata = {
        shopName: SHOP2_NAME,
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

getProductLinks(SHOP2_URL)
