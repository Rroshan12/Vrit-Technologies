import React from 'react';
import './App.css'

function App() {

const[count,setCount] = React.useState(0);


  function increaseCounter()
  {
    setCount(window.innerWidth)

  }



  React.useEffect(()=>{

    increaseCounter();

    window.addEventListener('resize', function(){
      
    })

    return ()=>window.removeEventListener('resize', increaseCounter)

  },[])


  return (
    <>
     <button onClick={()=>increaseCounter()}>Count {count}</button>
    </>
  )
}

export default App
