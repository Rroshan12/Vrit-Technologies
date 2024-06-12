import React from 'react'
import styled from 'styled-components'


const Logos = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-size:40px;
  font-weight:500;
  color: ${props => props.theme.primaryTextColor};


`
function Logo() {
  return (
    <>
      <Logos>Logo.</Logos>
    </>
  
  )
}

export default Logo