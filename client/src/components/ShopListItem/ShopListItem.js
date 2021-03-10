import React from 'react'
import styled from 'styled-components/macro'
import Button from '../App/Button/Button'

export default function ShopListItem({
  price,
  shipping = 'versandkostenfrei',
  shopName,
  shopLogo,
  shopUrl,
}) {
  return (
    <ListContainer>
      <ShopInfo>
        <ShopLogo
          src={shopLogo}
          alt={shopName}
          height="45"
          width="85"
        ></ShopLogo>
        <PriceInfo>
          <Price aria-label="price">{price}</Price>
          <Shipping arial-label="shipping">{shipping}</Shipping>
        </PriceInfo>
      </ShopInfo>
      <Button text="Zum Shop" onHandleClick={() => gotoLink(shopUrl)} />
    </ListContainer>
  )
}

function gotoLink(url) {
  window.open(url, '_blank')
}

const ListContainer = styled.section`
  display: grid;
  gap: 10px;
  grid-template-rows: repeat(2, minmax(auto 1fr));
  padding: 10px;
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

const Shipping = styled.div`
  font-weight: 600;
  font-size: 0.7em;
  color: var(--color-grey);
`

const ShopLogo = styled.img``
