import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  it('render a button with an uppercase text', () => {
    render(<Button text={'zum shop'} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('ZUM SHOP')).toBeInTheDocument()
  })

  it('render a button with red background color', () => {
    render(<Button text={'zum shop'} />)
    expect(screen.getByRole('button')).toHaveStyle('background-color: #e74c3c')
  })

  it('calls onClick when clicking the button', () => {
    const clickCallback = jest.fn()
    render(<Button onHandleClick={clickCallback} text={'zum shop'} />)
    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(clickCallback).toHaveBeenCalled()
  })
})
