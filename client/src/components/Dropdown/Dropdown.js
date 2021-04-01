import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components/macro'

export default function Dropdown() {
  const location = useLocation()
  useEffect(() => {
    setIsActive(false)
  }, [location])
  const [isActive, setIsActive] = useState(false)
  const [isSelected, setIsSelected] = useState([])

  const sizes_eu = [
    '39',
    '39 ⅓',
    '39,5',
    '39 ⅔',
    '40',
    '40 ⅓',
    '40,5',
    '40 ⅔',
    '41',
    '41 ⅓',
    '41,5',
    '41 ⅔',
    '42',
    '42 ⅓',
    '42,5',
    '42 ⅔',
    '43',
    '43 ⅓',
    '43,5',
    '43 ⅔',
    '44',
    '44 ⅓',
    '44,5',
    '44 ⅔',
    '45',
    '45 ⅓',
    '45,5',
    '45 ⅔',
  ]
  return (
    <DropdownContainer>
      <input name="size" type="hidden" value={isSelected.join(',')}></input>
      <DropdownButton
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      >
        Größe
      </DropdownButton>
      {isActive && (
        <DropdownContent>
          <DropdownListContainer>
            <DropdownList>
              {sizes_eu.map((size_eu, index) => (
                <>
                  <SizeItem
                    key={index}
                    type="checkbox"
                    id={size_eu}
                    value={size_eu}
                    checked={isSelected.includes(size_eu)}
                    onChange={() => handleChange(size_eu)}
                  />
                  <label htmlFor={size_eu}>{size_eu}</label>
                </>
              ))}
            </DropdownList>
          </DropdownListContainer>
          <Button type="button" onClick={() => setIsActive(!isActive)}>
            Übernehmen
          </Button>
        </DropdownContent>
      )}
    </DropdownContainer>
  )

  function handleChange(size) {
    isSelected.includes(size)
      ? setIsSelected(isSelected.filter(item => item !== size))
      : setIsSelected(prevState => [...prevState, size])
  }
}

const DropdownContainer = styled.div``

const DropdownButton = styled.div`
  position: relative;
  z-index: 12;
  width: 75px;
  height: 100%;
  padding: 8px;
  margin-right: 5px;
  background: var(--color-lightgrey);
  color: var(--color-grey);
  font-weight: 600;
  font-size: 0.9em;
  cursor: pointer;
  border-radius: ${props => (props.isActive ? '5px 5px 0px 0px' : '5px')};
  &:after {
    float: right;
    content: '${props => (props.isActive ? '▲' : '▼')}';
  }
`

const DropdownContent = styled.div`
  position: absolute;
  padding: 15px 10px;
  max-width: 365px;
  background: var(--color-lightgrey);
  -webkit-box-shadow: 0px 0px 8px -3px #808080;
  box-shadow: 0px 0px 8px -3px #808080;
`

const DropdownListContainer = styled.ul`
  margin: 0 0 10px 0;
  padding: 0;
`

const DropdownList = styled.li`
  list-style: none;
`

const SizeItem = styled.input`
  display: none;
  & + label {
    display: inline-block;
    position: relative;
    text-align: center;
    color: var(--color-darkgrey);
    font-weight: 600;
    font-size: 0.8em;
    border: 1px solid #a5a5a5;
    margin: 0 7px 5px 0;
    padding: 3px;
    width: 42px;
  }
  &:checked {
    & + label {
      background-color: #2c3e50;
      border: 1px solid #2c3e50;
      color: white;
    }
  }
  &:hover:not(:checked) {
    & + label {
      background-color: #a5a5a5;
    }
  }
`
const Button = styled.button`
  width: 100%;
  border: none;
  background-color: var(--color-red);
  padding: 10px;
  color: white;
  font-weight: 700;
  font-size: 0.9em;
  cursor: pointer;
`
