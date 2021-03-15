import { render, screen } from '@testing-library/react'
import ProductListing from './ProductListing'

describe('ProductListing', () => {
  it('render a card with an image, brand, model and price', () => {
    render(<ProductListing brand="Nike" model="Air Force 1" price="79,99" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByText('Nike')).toBeInTheDocument()
    expect(screen.getByText('Air Force 1')).toBeInTheDocument()
    expect(screen.getByText('79,99 €')).toBeInTheDocument()
  })

  it('render the price tag red, if on sale', () => {
    render(
      <ProductListing
        brand="Nike"
        model="Air Force 1"
        price="79,99"
        sale={true}
      />
    )
    const { color } = getComputedStyle(screen.getByText('79,99 €'))
    expect(color).toBe('rgb(231, 76, 60)')
  })
  it.todo('should redirect to product detail page on click')
})
