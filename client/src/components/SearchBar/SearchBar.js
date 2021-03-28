import React from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'

export default function SearchBar() {
  const { push } = useHistory()
  return (
    <SearchBarForm onSubmit={handleSubmit}>
      <SearchInput
        name="search"
        placeholder="z.B. Modell oder Marke"
      ></SearchInput>
    </SearchBarForm>
  )
}

function handleSubmit(event) {
  event.preventDefault()
  const form = event.target
  const { search } = form.elements
  push(`sneaker/?q=${search.value}`)
  console.log(search.value)
}

const SearchBarForm = styled.form``

const SearchInput = styled.input`
  padding: 8px;
  background-color: var(--color-lightgrey);
  color: var(--color-darkgrey);
  font-weight: 500;
  font-size: 1em;
  border-radius: 5px;
  border: none;
  outline: none;
`
