import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Button({ text, size, onHandleClick }) {
  return (
    <ButtonElement onClick={onHandleClick}>{text.toUpperCase()}</ButtonElement>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
}

const ButtonElement = styled.button`
  border: none;
  background-color: var(--color-red);
  padding: 15px;
  color: white;
  font-weight: 700;
`
