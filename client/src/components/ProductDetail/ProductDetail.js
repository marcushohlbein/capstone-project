import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import styled from 'styled-components/macro'

import ShopListItem from '../ShopListItem/ShopListItem'
import { getProduct } from '../../services/getProduct'
import { NavLink } from 'react-router-dom'

export default function ProductDetail() {
  const { styleId } = useParams()
  const { data, isError, error, isLoading } = useQuery(
    ['product', styleId],
    () => getProduct(styleId)
  )
  const modelClean = data?.model
    .split(' ')
    .slice(data?.brand.split(' ').length)
    .join(' ')

  if (isError) {
    return <p>Error while fetching product: {error}</p>
  }

  return (
    <ProductContainer>
      <ProductContent>
        <BackButton as={NavLink} exact to="/">
          zurück
        </BackButton>
        {isLoading && 'Loading...'}
        <ProductInfo>
          <ProductName>
            {data?.brand} {modelClean}
          </ProductName>
          <ProductNumber>{styleId}</ProductNumber>
        </ProductInfo>
        <ProductImage
          src={data?.media.imageUrl}
          alt={data?.brand + ' ' + data?.model}
        />
      </ProductContent>
      <ShopListContainer>
        {data?.shops.map((shop, i) => (
          <ShopListItem
            key={shop._id}
            price={shop.salesPrice || shop.regularPrice}
            sizes_eu={shop.sizes_eu}
            shopName={shop.shopName}
            productMerchantLink={shop.productLink}
          />
        ))}
      </ShopListContainer>
    </ProductContainer>
  )
}

ShopListItem.propTypes = {
  brand: PropTypes.string,
  model: PropTypes.string,
  styleId: PropTypes.string,
  media: PropTypes.array,
  shops: PropTypes.array,
}

const ProductContainer = styled.section`
  display: grid;
  gap: 10px;
  margin-bottom: 20px;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

const ProductContent = styled.div``

const BackButton = styled.div`
  text-decoration: none;
  color: var(--color-grey);
  font-style: italic;
  &:before {
    content: '< ';
  }
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
