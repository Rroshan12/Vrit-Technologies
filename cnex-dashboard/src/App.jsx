import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import CnexProject from './cnexapp'
import Dashboard from './cnexapp/Dashboard'
import Product from './cnexapp/Product'
import { GlobalStyle } from './shared/utils/globalStyle'

function App() {

  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Routes>
        <Route path = {'/cnex'} element={<CnexProject/>}>
        <Route path={'dashboard'} element={<Dashboard/>} />
        <Route path={'product'} element={<Product/>} />
        </Route>
      </Routes>
    
    </BrowserRouter>
   
  )
}

export default App
