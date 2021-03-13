import { render, screen } from '@testing-library/react'
import ShopListItem from './ShopListItem'

describe('ShopListItem', () => {
  it('render a shop name, price tag and a button', () => {
    render(
      <ShopListItem
        price={'79,99€'}
        shopName={'Brooklyn'}
        url={
          'https://www.43einhalb.com/p/nike-challenger-og-gruen-schwarz-504025'
        }
      />
    )
    expect(screen.getByText('Brooklyn')).toBeInTheDocument()
    expect(screen.getByText('79,99€')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('render default value for shipping', () => {
    render(
      <ShopListItem
        price={'79,99€'}
        shopName={'Brooklyn'}
        url={
          'https://www.43einhalb.com/p/nike-challenger-og-gruen-schwarz-504025'
        }
      />
    )
    expect(screen.getByText(/versandkostenfrei/i)).toHaveTextContent(
      /versandkostenfrei/i
    )
  })
})
