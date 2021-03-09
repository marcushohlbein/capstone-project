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
    <ListItem>
      <Image src={img} />
      <Info>
        <Brand>{brand}</Brand>
        <Model>{model}</Model>
      </Info>
      <Meta>
        <Price sale={sale}>
          ab <span>{price} €</span>
        </Price>
      </Meta>
    </ListItem>
  )
}

ProductListing.propTypes = {
  img: PropTypes.string,
  brand: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.string,
  sale: PropTypes.bool,
}

const ListItem = styled.li`
  font-family: Source Sans Pro, sans-serif;
  color: var(--color-grey);
  display: grid;
  list-style: none;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
`

const Info = styled.div`
  padding: 5px;
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
`

const Meta = styled.div`
  display: flex;
  background: var(--color-lightgrey);
  align-items: center;
  justify-content: flex-end;
  padding: 4px 5px;
`

const Price = styled.div`
  font-size: 0.8em;
  span {
    color: ${props => (props.sale ? '#E74C3C' : '#6F7172')};
    font-weight: 700;
    font-size: 1.4em;
  }
`
