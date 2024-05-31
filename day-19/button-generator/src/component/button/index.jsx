import React from 'react'
import './button.css'
import IconFactory from '../icon/IconFactory';

function ButtonFactory({type}) {

    switch(type)
    {
        case "download":   return <button className={'download'}> <IconFactory iconName='download'/>Download</button>;
        case "submit":   return <button className='submit'>Submit</button>;
        case "export":   return <button className='export'>Export</button>;
        case "cancel":   return <button className='cancel'>  <IconFactory iconName='cancel'/>Cancel</button>;

        default:      return  <button>Submit</button>

    }


}

export default ButtonFactory