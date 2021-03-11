import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import ShopListItem from '../ShopListItem/ShopListItem'

export default function ProductDetail({ brand, model, SKU, img, shops }) {
  return (
    <ProductContainer>
      <ProductInfo>
        <ProductName>
          {brand} {model}
        </ProductName>
        <ProductNumber>{SKU}</ProductNumber>
      </ProductInfo>
      <ProductImage src={img} alt={brand + ' ' + model} />
      <ShopListContainer>
        {shops.map((shops, i) => (
          <ShopListItem
            price={shops.price}
            shipping={shops.shipping}
            shopName={shops.shopName}
            shopLogo="../../assets/brooklyn-shop.webp"
            shopUrl={shops.shopUrl}
          />
        ))}
      </ShopListContainer>
    </ProductContainer>
  )
}

ShopListItem.propTypes = {
  brand: PropTypes.string,
  shoe: PropTypes.string,
  SKU: PropTypes.string,
  img: PropTypes.string,
  shops: PropTypes.array,
}

const ProductContainer = styled.main`
  display: grid;
  gap: 20px;
  background: var(--color-lightgrey);
`

const ProductInfo = styled.div`
  display: grid;
`

const ProductName = styled.h1`
  margin: 0;
  color: var(--color-darkgrey);
`

const ProductNumber = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 0.8em;
  line-height: 1;
  color: var(--color-grey);
`

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  padding: 5px;
  background: white;
  border: 1px solid var(--color-gray);
`

const ShopListContainer = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
`
