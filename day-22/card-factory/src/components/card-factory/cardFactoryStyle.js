import styled from "styled-components";


export const CardWrapper = styled.div`
width:300px;
height:400px;
background: #000;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`

export const Image = styled.img`
width:100%;
height:40%;
`

export const CardTitle = styled.h1`
color:white;

`

export const CardDesc = styled.p`
color:white;
`


export const AddToCartButton = styled.button`
background: ${props => props.theme.colors.primary};
color:white;
`