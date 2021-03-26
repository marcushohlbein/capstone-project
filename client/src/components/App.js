import styled from 'styled-components/macro'
import { useQuery } from 'react-query'

import { Switch, Route } from 'react-router-dom'

import ProductListing from './ProductList/ProductList'
import ProductDetail from './ProductDetail/ProductDetail'

import { getProducts } from '../services/getProducts'
import Header from './Header/Header'
import SizeFilter from './SizeFilter/SizeFilter'

const queryString = require('query-string')

export default function App() {
  const { data, isError, error, isLoading } = useQuery('products', () =>
    getProducts()
  )

  if (isError) {
    return <p>Error while fetching product: {error}</p>
  }

  const parsed = queryString.parse(window.location.search)
  console.log(parsed)

  return (
    <AppGrid>
      <Header />
      <SizeFilter />
      <ContentContainer>
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
      </ContentContainer>
    </AppGrid>
  )
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 56px auto;
  height: 100vh;
  max-width: 1200px;
  min-width: 375px;
  margin: 0 auto;
`

const ContentContainer = styled.main`
  padding: 10px;
  overflow: scroll;
`
const ProductsContainer = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
