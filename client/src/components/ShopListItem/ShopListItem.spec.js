import { render, screen } from '@testing-library/react'
import ShopListItem from './ShopListItem'
import brooklyn from '../../assets/brooklyn-shop.webp'

describe('ShopListItem', () => {
  it('render a shop logo, price tag and a button', () => {
    render(
      <ShopListItem
        price={'79,99€'}
        shopName={'Brooklyn'}
        shopLogo={brooklyn}
        url={
          'https://www.43einhalb.com/p/nike-challenger-og-gruen-schwarz-504025'
        }
      />
    )
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByText('79,99€')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('render a list item with lightgrey background color', () => {
    render(
      <ShopListItem
        price={'79,99€'}
        shopName={'Brooklyn'}
        shopLogo={brooklyn}
        url={
          'https://www.43einhalb.com/p/nike-challenger-og-gruen-schwarz-504025'
        }
      />
    )
    expect(screen.getByRole('button')).toHaveStyle('background: #f0f0f0')
  })
  it('render default value for shipping', () => {
    render(
      <ShopListItem
        price={'79,99€'}
        shopName={'Brooklyn'}
        shopLogo={brooklyn}
        url={
          'https://www.43einhalb.com/p/nike-challenger-og-gruen-schwarz-504025'
        }
      />
    )
    //expect(screen.getByText('versandkostenfrei')).toBe(true)
  })
})
