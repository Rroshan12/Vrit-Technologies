import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardFactory from './components/card-factory'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/theme'
import axios from 'axios'

function App() {

const[themeState, setThemeState] = useState(false)

const[data, setData] = useState([]);
function fetchData()
  {

    axios.get('https://dummyjson.com/products')
  .then(function (response) {
    // handle success
    setData(response?.data?.products);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  }


  console.log('ddd', data);

  useEffect(()=>{

    fetchData();

  },[])


  function toggleTheme()
  {

    setThemeState(!themeState);

  }


  return (
    <ThemeProvider theme={theme}>
    <div style={{display:'flex', gap:'15px', width:'100%', height:'100%', background:`${themeState ? 'black': 'white'}`, flexWrap:'wrap'}}>

      {/* <button onClick={()=>toggleTheme()}>Switch</button> */}

      {
        data?.map((item)=>(
          <CardFactory title={`${item?.title}`} description={`${item.description}`} imagePath={`${item?.images[0]}`}/>
     

        ))
      }
    
    </div>
    </ThemeProvider>
  )
}

export default App
