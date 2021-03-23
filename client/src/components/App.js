import styled from 'styled-components/macro'
import { useQuery } from 'react-query'

import { Switch, Route } from 'react-router-dom'

import ProductListing from './ProductList/ProductList'
import ProductDetail from './ProductDetail/ProductDetail'

import { getProducts } from '../services/getProducts'

export default function App() {
  const { data, isError, error, isLoading } = useQuery('products', () =>
    getProducts()
  )

  if (isError) {
    return <p>Error while fetching product: {error}</p>
  }

  return (
    <AppGrid>
      {isLoading && 'Loading...'}
      <Switch>
        <Route exact path="/">
          <ProductsContainer>
            {data?.map(product => (
              <ProductListing key={product._id} product={product} />
            ))}
          </ProductsContainer>
        </Route>
        <Route path="/:styleId" children={<ProductDetail />} />
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
