import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function ProductList(props) {
  const { styleId, media, brand, shoe, retailPrice, sale } = props.product
  return (
    <ListItem
      as={NavLink}
      exact
      to={{
        pathname: `/${styleId}`,
        product: props.product,
      }}
    >
      <Image src={media.imageUrl} alt={brand + ' - ' + shoe} />
      <Info>
        <Brand>{brand}</Brand>
        <Model>{shoe}</Model>
      </Info>
      <Meta>
        <Price sale={sale}>
          ab <span>{retailPrice} €</span>
        </Price>
      </Meta>
    </ListItem>
  )
}

ProductList.propTypes = {
  img: PropTypes.string,
  brand: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.string,
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
  padding: 10px;
  max-width: 100%;
`

const Info = styled.div`
  padding: 5px 10px;
  overflow: hidden;
`

const Brand = styled.div`
  font-size: 0.8em;
  line-height: 1;
  margin-top: 10px;
`

const Model = styled.h3`
  margin: 0;
  color: var(--color-darkgrey);
  font-weight: 700;
  font-size: 1em;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Meta = styled.div`
  display: flex;
  background: var(--color-lightgrey);
  align-items: center;
  justify-content: flex-end;
  padding: 4px 10px;
`

const Price = styled.div`
  font-size: 0.8em;
  span {
    color: ${props => (props.sale ? '#E74C3C' : '#6F7172')};
    font-weight: 700;
    font-size: 1.4em;
  }
`
