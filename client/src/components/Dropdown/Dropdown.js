import React from 'react'
import styled from 'styled-components/macro'

export default function Dropdown(sizes_eu) {
  return (
    <DropdownContainer>
      Deine Größe
      <DropdownContent>
        <DropdownListContainer>
          <DropdownList>
            <SizeItem type="checkbox" id="42" />
            <SizeLabel for="checkbox-2-1">42</SizeLabel>
          </DropdownList>
        </DropdownListContainer>
      </DropdownContent>
    </DropdownContainer>
  )
}

const DropdownContainer = styled.div``

const DropdownContent = styled.div``

const DropdownListContainer = styled.ul`
  padding: 0;
`

const DropdownList = styled.li`
  list-style: none;
`

const SizeItem = styled.input`
  display: none;
  position: relative;
  text-align: center;
  color: var(--color-darkgrey);
  font-weight: 600;
  font-size: 0.8em;
  border: 1px solid #a5a5a5;
  margin: 0 7px 5px 0;
  padding: 3px;
  width: 42px;
`

const SizeLabel = styled.label`
  display: inline;
  font-family: Source Sans Pro, sans-serif;
`
