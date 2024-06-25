import React from 'react'

function Wrapper({children}) {
  return (
    <div style={{background:'#fff', borderRadius:'5px'}}>{children}</div>
  )
}

export default Wrapper