import React, { useState } from 'react'
import NavItemBar from '../components/nav'
import Hero from '../assets/images/hero.png'
import styled, { ThemeProvider } from 'styled-components'
import ButtonFactory from '../components/button'
import { themeDark, themeLight } from '../theme'



const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;

`

const LeftPart = styled.div`
width:50%;
height:500px;
padding-top:10%;
padding-left:130px;
text-align:left;

`

const RightPart = styled.div`
width:50%;
height:500px;
over-flow:hidden;
position:absolute;
margin-top:-120px;
left:50%;
img{
width:900px !important;
margin-right:-100px;
}
`


const Title = styled.div`
color: ${props => props.theme.primaryTextColor};
font-family: "Lexend Deca", sans-serif;
padding-top:15px;
font-size:64px;
`
const Desc = styled.div`
color: ${props => props.theme.primaryTextColor};
font-family: "Lexend Deca", sans-serif;
font-size:16px;
`
const TitleRed = styled.div`
color: #ff0013;
`


const HomeWrapper = styled.div`
width:100%;
height:100vh;
margin:0;
padding:0;
background: ${props => props.theme.lightColor};


`

function HomePage() {

  const[isLightMode, setIsLightMode] = useState(true);

  function handleToggle()
  {
    setIsLightMode(!isLightMode);
  }


  return (
     <>
      
      <ThemeProvider theme={!isLightMode ? themeDark : themeLight} >
         <HomeWrapper>
     
      <NavItemBar toggleLightMode={handleToggle}/>
        <Container>
          <LeftPart><Title><TitleRed>Lorem ipsum</TitleRed> dolor, sit amet consectetur adipisicing elit. Sint</Title><br/><Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate nemo fugit eligendi odit aliquam distinctio</Desc> <br/><br/><ButtonFactory type="knowme"/></LeftPart>
          <RightPart>    <img src={Hero} style={{width:'100%'}}/></RightPart>
    </Container>
        
    </HomeWrapper>
    </ThemeProvider>
    
    </>
  

  )
}

export default HomePage