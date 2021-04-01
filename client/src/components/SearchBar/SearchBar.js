import React from 'react'
import styled from 'styled-components/macro'
import Dropdown from '../Dropdown/Dropdown'

export default function SearchBar() {
  return (
    <SearchBarForm>
      <Dropdown />
      <SearchInput
        name="q"
        required
        placeholder="z.B. Modell oder Marke"
      ></SearchInput>
    </SearchBarForm>
  )
}

const SearchBarForm = styled.form`
  display: flex;
  padding: 5px 10px;
  width: 100%;
`

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: var(--color-lightgrey);
  color: var(--color-darkgrey);
  font-weight: 500;
  font-size: 1em;
  border-radius: 5px;
  border: none;
  outline: none;
`
