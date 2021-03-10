import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('render a button with an uppercase text', () => {
    render(
      <Button
        text={'zum shop'}
        url={
          'https://www.43einhalb.com/p/nike-challenger-og-gruen-schwarz-504025'
        }
      />
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('ZUM SHOP')).toBeInTheDocument()
  })

  it('render a button with red background color', () => {
    render(<Button text={'zum shop'} />)
    expect(screen.getByRole('button')).toHaveStyle('background-color: #e74c3c')
  })
  it.todo('redirect to external url on click')
})
