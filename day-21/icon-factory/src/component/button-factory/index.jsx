import React from 'react'
import './button.css'
import IconFactory from '../icon-factory';

function ButtonFactory({type}) {

    switch(type)
    {
        case "home":   return <button className={'download'}> <IconFactory iconName='home' color='red'/>Home</button>;
        case "search":   return <button className='search'> <IconFactory iconName='search' color='white'/> Search</button>;
        case "setting":   return <button className='export'> <IconFactory iconName='setting' color='red'/>Settings</button>;
        default:      return  <button className='submit'>Submit</button>

    }


}

export default ButtonFactory