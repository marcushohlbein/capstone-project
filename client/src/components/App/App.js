import data from '../../data/products.json'
import styled from 'styled-components/macro'
import ProductListing from '../ProductListing/ProductListing'

export default function App() {
  return (
    <AppGrid>
      <ProductsContainer>
        {data.map(products => (
          <ProductListing
            key={products.id}
            img={products.media.thumbUrl}
            brand={products.brand}
            model={products.name}
            price={products.retailPrice}
          />
        ))}
      </ProductsContainer>
    </AppGrid>
  )
}

const AppGrid = styled.main`
  display: grid;
  width: 100%;
`

const ProductsContainer = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`
