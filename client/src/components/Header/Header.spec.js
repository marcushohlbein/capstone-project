import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('should render a header component with a logo', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
