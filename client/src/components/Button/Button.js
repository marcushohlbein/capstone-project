import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Button({ text, onHandleClick }) {
  return (
    <ButtonElement onClick={onHandleClick}>{text.toUpperCase()}</ButtonElement>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onHandleClick: PropTypes.func,
}

const ButtonElement = styled.button`
  border: none;
  background-color: var(--color-red);
  padding: 10px;
  color: white;
  font-weight: 700;
  font-size: 0.9em;
  cursor: pointer;
`
