import React from 'react'
import styled from 'styled-components'
import './nav.css'
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
display:flex;
width:346px;
gap:30px;
color:  ${props => props.theme.primaryTextColor};
font-family: "Lexend Deca", sans-serif;
padding-top:15px;
z-index:100;

a{
text-decoration:none;
color: ${props => props.theme.primaryTextColor};
}

`
function NavMidPart() {
    let location = useLocation();
  return (
    <Wrapper>
        <a href="/" className={`${location.pathname === "/" ? 'active':''}`} >Home</a>
        <a href="/about"  className={`${location.pathname === "/about" ? 'active':''}`}>About US</a>
        <a href="/contact"  className={`${location.pathname === "/contact" ? 'active':''}`}>Contact US</a>
        
    </Wrapper>
  )
}

export default NavMidPart



// import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
// import './nav.css'

// const Wrapper = styled.div`
// display:flex;
// width:346px;
// height:16px;
// gap:30px;
// color: #363636;
// font-family: "Lexend Deca", sans-serif;
// padding-top:15px;

// a{
// text-decoration:none;
// color: #363636;
// }

// `
// function NavMidPart() {

//     const[activePath, setActivePath] = useState('/');

//     function toggleActivePath(path)
//     {
//        localStorage.setItem('path', path)
//     }

//     useEffect(()=>{
//         setActivePath(localStorage.getItem('path'))
//     },[])
//   return (
//     <Wrapper>
//         <a href="/" className={`${activePath === "/" ? 'active':''}`} onClick={()=> toggleActivePath('/')}  >Home</a>
//         <a href="/about"  className={`${activePath === "/about" ? 'active':''}`}  onClick={()=> toggleActivePath('/about')} >About US</a>
//         <a href="/contact"  className={`${activePath === "/contact" ? 'active':''}`}  onClick={()=> toggleActivePath('/contact')} >Contact US</a>
        
//     </Wrapper>
//   )
// }

// export default NavMidPart