import React from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'

export default function SearchBar() {
  const { push } = useHistory()
  return (
    <SearchBarForm onSubmit={handleSubmit}>
      <SearchInput
        name="q"
        required
        placeholder="z.B. Modell oder Marke"
      ></SearchInput>
    </SearchBarForm>
  )

  function handleSubmit(event) {
    const form = event.target
    const { q: query } = form.elements
    push(`/?q=${query.value}`)
  }
}

const SearchBarForm = styled.form`
  padding: 5px 10px;
  width: 100%;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  background-color: var(--color-lightgrey);
  color: var(--color-darkgrey);
  font-weight: 500;
  font-size: 1em;
  border-radius: 5px;
  border: none;
  outline: none;
`
