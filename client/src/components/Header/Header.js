import React from 'react'
import styled from 'styled-components/macro'
import logo from '../../assets/sneaker24-logo.png'

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="sneaker24-logo" width="125" height="25" />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  height: 56px;
  width: 100%;
  padding: 10px;
  background-color: var(--color-darkblue);
`

const Logo = styled.img`
  height: 25px;
  width: 120px;
`
