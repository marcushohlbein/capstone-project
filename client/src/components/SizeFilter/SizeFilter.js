import React from 'react'
import styled from 'styled-components/macro'

export default function SizeFilter() {
  return (
    <SizesList>
      <SizeItem>
        <SizeLabel>
          39
          <Input type="checkbox" />
        </SizeLabel>
      </SizeItem>
      <SizeItem>
        <SizeLabel>
          40
          <Input type="checkbox" />
        </SizeLabel>
      </SizeItem>
      <SizeItem>
        <SizeLabel>
          41,5
          <Input type="checkbox" />
        </SizeLabel>
      </SizeItem>
      <SizeItem>
        <SizeLabel>
          42
          <Input type="checkbox" />
        </SizeLabel>
      </SizeItem>
      <SizeItem>
        <SizeLabel>
          43
          <Input type="checkbox" />
        </SizeLabel>
      </SizeItem>
      <SizeItem>
        <SizeLabel>
          43,5
          <Input type="checkbox" />
        </SizeLabel>
      </SizeItem>
    </SizesList>
  )
}

const SizesList = styled.ul`
  display: flex;
  padding: 18px 8px 8px;
  margin: 0;
  flex-wrap: wrap;
`

const SizeItem = styled.li`
  list-style: none;
  text-align: center;
  color: var(--color-darkgrey);
  font-weight: 600;
  font-size: 0.8em;
  border: 1px solid var(--color-grey);
  margin: 0 7px 5px 0;
  padding: 3px;
  width: 42px;
`

const SizeLabel = styled.label``

const Input = styled.input`
  display: none;
  border-radius: 0;
  float: left;
  padding: 1rem;
  width: 80%;
  height: 4rem;
  border: 0;
  color: #3b3b3b;
`
