import React from 'react'
import styled from 'styled-components/macro'
import Button from '../Button/Button'
import PropTypes from 'prop-types'
import formattedSize from '../../lib/formattedSize'

export default function ShopListItem({
  price,
  shopName,
  sizes_eu,
  productMerchantLink,
}) {
  const imgUrl = './assets/' + shopName + '.svg'
  return (
    <ListContainer>
      <ShopInfo>
        <ShopLogo src={imgUrl} alt="" width="90" />
        <PriceInfo>
          <Price>{price} €</Price>
        </PriceInfo>
      </ShopInfo>
      <SizeContainer>
        {sizes_eu.map((size_eu, i) => (
          <SizeItem
            key={i}
            title="zum Shop"
            onClick={() => gotoLink(productMerchantLink)}
          >
            {formattedSize(size_eu)}
          </SizeItem>
        ))}
      </SizeContainer>
      <Button
        text="Zum Shop"
        onHandleClick={() => gotoLink(productMerchantLink)}
      />
    </ListContainer>
  )
}

ShopListItem.propTypes = {
  price: PropTypes.string,
  shipping: PropTypes.string,
  shopName: PropTypes.string,
  shopUrl: PropTypes.string,
  sizes_eu: PropTypes.array,
}

function gotoLink(url) {
  window.location.href = url
  //window.open(url, '_blank')
}

const ListContainer = styled.section`
  display: grid;
  gap: 10px;
  grid-template-rows: repeat(2, minmax(auto 1fr));
  padding: 8px;
  background: var(--color-lightgrey);
`

const ShopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PriceInfo = styled.div`
  display: grid;
  justify-items: flex-end;
  line-height: 1.2;
`

const Price = styled.div`
  font-weight: 700;
  font-size: 1.1em;
  color: var(--color-darkgrey);
`

const ShopLogo = styled.img`
  color: var(--color-darkgrey);
  margin: 10px;
`

const SizeContainer = styled.ul`
  border-top: 1px solid var(--color-grey);
  display: flex;
  padding: 18px 8px 8px;
  margin: 0;
  flex-wrap: wrap;
`

const SizeItem = styled.li`
  list-style: none;
  text-align: center;
  color: var(--color-darkgrey);
  font-weight: 600;
  font-size: 0.8em;
  border: 1px solid var(--color-grey);
  margin: 0 7px 5px 0;
  padding: 3px;
  width: 42px;
  cursor: pointer;
`
