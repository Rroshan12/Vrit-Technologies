import React from 'react'
import Logo from '../logo'
import NavMidPart from './NavMidPart'
import ButtonFactory from '../button'
import styled from 'styled-components'
import Sun from '../../assets/images/sun.png'


const Wrapper = styled.div`
display:flex;
width:100%;
justify-content: space-around;
align-item:center;
margin-top:20.5px;
`

const NavLastPart = styled.div`
display:flex;
gap:5px;
cursor : pointer !important;
z-index:10000;
`
function NavItemBar({toggleLightMode}) {



  return (
    <Wrapper>
        <Logo/>
        <NavMidPart/>

        <NavLastPart>
          <img onClick={toggleLightMode} src={Sun}/>
          <ButtonFactory type="getintouch"/>
        </NavLastPart>

    </Wrapper>
   
  )
}

export default NavItemBar