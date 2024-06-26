import React from 'react'
import { Outlet, Route, Router, Routes } from 'react-router-dom'
import Dashboard from './Company/Company'
import Sidebar from './Sidebar'

function CnexProject() {
  return (
    <div>


<Sidebar>
<Outlet/>
</Sidebar>


    
    </div>
  )
}

export default CnexProject