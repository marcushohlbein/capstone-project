//import json from '../data/products.json'
import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import ProductListing from './ProductList/ProductList'
import ProductDetail from './ProductDetail/ProductDetail'

import { Switch, Route } from 'react-router-dom'

//import { useQuery } from 'react-query'
//import axios from 'axios'
import getProducts from '../services/getProducts'

export default function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(data => setProducts([...data]))
  }, [])

  return (
    <AppGrid>
      <Switch>
        <Route exact path="/">
          <ProductsContainer>
            {products.map(product => (
              <ProductListing key={product._id} product={product} />
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
