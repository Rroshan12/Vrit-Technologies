import React from 'react'
import './wrapper.css'
import '../../styles/wrapperStyles.css'

function Wrapper({children, customClass}) {
  return (
    <div className={`wrapper ${customClass}`}>{children}</div>
  )
}

export default Wrapper