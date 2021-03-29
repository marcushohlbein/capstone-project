import React from 'react'
import styled from 'styled-components/macro'

export default function SearchBar() {
  return (
    <SearchBarForm onSubmit={handleSubmit}>
      <SearchInput name="q" placeholder="z.B. Modell oder Marke"></SearchInput>
    </SearchBarForm>
  )
}

function handleSubmit(event) {
  //event.preventDefault()
  const form = event.target
  const { q } = form.elements
  //push(`/sneaker/?q=${search.value}`)
  console.log(q.value)
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
