import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import ProductList from './ProductList'
import { Router } from 'react-router-dom'

import product from '../../data/products.json'

const renderWithRouter = component => {
  const history = createMemoryHistory()
  return {
    ...render(<Router history={history}>{component}</Router>),
  }
}

describe('ProductList', () => {
  it('render a card with an image, brand, model and price', () => {
    renderWithRouter(<ProductList product={product[0]} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByText('Vans')).toBeInTheDocument()
    expect(screen.getByText('Vans Era')).toBeInTheDocument()
    expect(screen.getByText('105 €')).toBeInTheDocument()
  })

  it('render the price tag red, if on sale', () => {
    renderWithRouter(<ProductList product={product[0]} sale={true} />)
    const { color } = getComputedStyle(screen.getByText('105 €'))
    expect(color).toBe('rgb(231, 76, 60)')
  })
})
