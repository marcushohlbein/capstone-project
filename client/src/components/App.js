import data from '../data/products.json'
import styled from 'styled-components/macro'
import ProductListing from './ProductList/ProductList'
import ProductDetail from './ProductDetail/ProductDetail'

import { Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <AppGrid>
      <Switch>
        <Route exact path="/">
          <ProductsContainer>
            {data.map(product => (
              <ProductListing key={product.id} product={product} />
            ))}
          </ProductsContainer>
        </Route>
        <Route
          path="/:styleId"
          render={props => <ProductDetail {...props} />}
        />
      </Switch>
    </AppGrid>
  )
}

const AppGrid = styled.main`
  display: grid;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 10px;
`

const ProductsContainer = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`
