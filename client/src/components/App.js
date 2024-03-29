import styled from 'styled-components/macro'
import { useQuery } from 'react-query'
import { Switch, Route } from 'react-router-dom'

import ProductListing from './ProductList/ProductList'
import ProductDetail from './ProductDetail/ProductDetail'

import { getProducts } from '../services/getProducts'
import Header from './Header/Header'
import SearchBar from './SearchBar/SearchBar'

export default function App() {
  const { data, isError, error, isLoading } = useQuery('products', () => {
    if (window.location.search.length === 0) {
      return getProducts()
    } else {
      return getProducts(window.location.search)
    }
  })

  if (isError) {
    return <p>Error while fetching product: {error}</p>
  }

  return (
    <AppGrid>
      <Header />
      <SearchBar />
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
          <Route path="/:styleId" component={ProductDetail} />
        </Switch>
      </ContentContainer>
    </AppGrid>
  )
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 56px 48px auto;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;

  &:last-child {
    position: relative;
  }

  &::last-child:after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 20px;
  }
`

const ContentContainer = styled.main`
  padding: 10px;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &:-webkit-scrollbar {
    display: none;
  }
`
const ProductsContainer = styled.ul`
  padding: 0;
  margin-bottom: 10px;
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
