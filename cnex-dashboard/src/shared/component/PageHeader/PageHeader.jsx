import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'


const PageTitle= styled.div`


color: #363637;
font-style: normal;
font-weight: 700;
font-size: 24px;


`

const PageDesc= styled.div`

width: 174px;
height: 24px;
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #86888A;


`

function PageHeader({pageHeader, pageDesc, handleButtonClick}) {
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <div>
        
      <PageTitle>{pageHeader}</PageTitle>
      <PageDesc>{pageDesc}</PageDesc>

      </div>

      <Button type="primary" onClick={handleButtonClick}>+ Setup</Button>
    </div>
  )
}

export default PageHeader