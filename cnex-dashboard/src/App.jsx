import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import CnexProject from './cnexapp'
import Dashboard from './cnexapp/Company/Company'
import Product from './cnexapp/Product'
import { GlobalStyle } from './shared/utils/globalStyle'
import { AppContextProvider } from './shared/context/AppContext'

function App() {

  return (
    <AppContextProvider>
      <BrowserRouter>
    <GlobalStyle/>
      <Routes>
        <Route path = {'/cnex'} element={<CnexProject/>}>
        <Route path={'company'} element={<Dashboard/>} />
        <Route path={'product'} element={<Product/>} />
        </Route>
      </Routes>
    
    </BrowserRouter>

    </AppContextProvider>
    
   
  )
}

export default App
