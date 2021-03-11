import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import ShopListItem from '../ShopListItem/ShopListItem'

export default function ProductDetail(props) {
  const { brand, shoe, styleId, media, shops } = props.location.props
  const model = shoe.split(' ').slice(brand.split(' ').length)
  return (
    <ProductContainer>
      <ProductInfo>
        <ProductName>
          {brand} {model}
        </ProductName>
        <ProductNumber>{styleId}</ProductNumber>
      </ProductInfo>
      <ProductImage src={media.imageUrl} alt={brand + ' ' + model} />
      <ShopListContainer>
        {shops.map((shops, i) => (
          <ShopListItem
            price={shops.price}
            shipping={shops.shipping}
            shopName={shops.shopName}
            shopLogo={`../../assets/${shops.shopName}.webp`}
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
  styleId: PropTypes.string,
  media: PropTypes.array,
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
