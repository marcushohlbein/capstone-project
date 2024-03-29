import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function ProductList(props) {
  const { styleId, media, brand, model, shops, sale } = props.product
  const modelName = model.includes(brand)
    ? model.split(' ').slice(brand.split(' ').length).join(' ')
    : model

  const shopCount = count => (count > 1 ? count + ' Shops' : count + ' Shop')

  function minPrice(shops) {
    const regularPrice = shops
      .map(product => product.regularPrice)
      .sort((a, b) => a < b)
    const salesPrice = shops
      .map(product => product.salesPrice)
      .sort((a, b) => a > b)
      .filter(Boolean)
    if (salesPrice[0] !== '' && regularPrice[0] > salesPrice[0])
      return salesPrice[0]
    return regularPrice[0]
  }

  return (
    <ListItem as={NavLink} exact to={`/${styleId}`}>
      <Image src={media.imageUrl} alt={brand + ' - ' + model} />
      <Info>
        <Brand>{brand}</Brand>
        <Model>{modelName}</Model>
      </Info>
      <Meta>
        <Shop>{shopCount(shops.length)}</Shop>
        <Price sale={sale}>
          ab <span>{minPrice(shops)} €</span>
        </Price>
      </Meta>
    </ListItem>
  )
}

ProductList.propTypes = {
  styleId: PropTypes.string,
  media: PropTypes.object,
  brand: PropTypes.string,
  model: PropTypes.string,
  shops: PropTypes.array,
  sale: PropTypes.bool,
}

const ListItem = styled.li`
  color: var(--color-grey);
  display: grid;
  width: 100%;
  list-style: none;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  text-decoration: none;
`

const Image = styled.img`
  padding: 18px;
  max-width: 100%;
`

const Info = styled.div`
  padding: 5px 8px;
  overflow: hidden;
`

const Brand = styled.div`
  font-size: 0.7em;
  line-height: 1;
  margin-top: 10px;
`

const Model = styled.h3`
  margin: 0;
  color: var(--color-darkgrey);
  font-weight: 700;
  font-size: 0.9em;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  background: var(--color-lightgrey);
  align-items: baseline;
  padding: 8px 8px;
`

const Shop = styled.div`
  font-size: 0.8em;
  font-weight: 700;
`

const Price = styled.div`
  font-size: 0.7em;
  span {
    color: ${props => (props.sale ? '#E74C3C' : '#6F7172')};
    font-weight: 700;
    font-size: 1.2em;
  }
`
