import { screen, render } from '@testing-library/react'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('render a searchBar with an placeholder text', () => {
    render(<SearchBar />)
    expect(
      screen.getByPlaceholderText('z.B. Modell oder Marke')
    ).toBeInTheDocument()
  })
})
