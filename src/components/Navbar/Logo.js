import React from 'react'
import styled from '@emotion/styled'
import logo from '../../../public/logo.svg'

const StyledLogo = styled.svg`
  fill: #232127;
  width: 6em;
  height: 3em;
  @media screen and (min-width: 780px) {
    width: 10em;
    height: 3em;
    margin: 0 1em;
  }
`


const Logo = () => {
  return (
    <StyledLogo>
        <use href={logo + '#logo'} />
    </StyledLogo>
  )
}

export default Logo