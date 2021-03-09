import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

export default function ProductListing({
  img,
  brand,
  model,
  price,
  sale = false,
}) {
  return (
    <>
      <ProductListElement>
        <ProductImage src={img} />
        <ProductInfo>
          <ProductBrand>{brand}</ProductBrand>
          <ProductModel>{model}</ProductModel>
        </ProductInfo>
        <ProductMeta>
          <ProductPrice sale={sale}>
            ab <span>{price} €</span>
          </ProductPrice>
        </ProductMeta>
      </ProductListElement>
    </>
  )
}

ProductListing.propTypes = {
  img: PropTypes.string,
  brand: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.string,
  sale: PropTypes.bool,
}

const ProductListElement = styled.li`
  font-family: Source Sans Pro, sans-serif;
  color: #6f7172;
  display: grid;
  list-style: none;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
`

const ProductImage = styled.img`
  width: 100%;
`

const ProductInfo = styled.div`
  padding: 5px;
`

const ProductBrand = styled.div`
  font-size: 0.8em;
  line-height: 1;
  margin-top: 10px;
`

const ProductModel = styled.h3`
  margin: 0;
  color: #464646;
  font-weight: 700;
  font-size: 1em;
`

const ProductMeta = styled.div`
  display: flex;
  background: #f0f0f0;
  align-items: center;
  justify-content: flex-end;
  padding: 4px 5px;
`

const ProductPrice = styled.div`
  font-size: 0.8em;
  span {
    color: ${props => (props.sale ? '#E74C3C' : '#6F7172')};
    font-weight: 700;
    font-size: 1.4em;
  }
`
