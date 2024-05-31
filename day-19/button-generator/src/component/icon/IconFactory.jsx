import React from 'react'
import Download from './Download';


function IconFactory({iconName}) {

  switch(iconName)
    {
        case "home":   return <Download color='white'/>;
        case "setting":   return <Download color='white'/>;
        case "download":   return <Download color='red'/>;
        case "cancel":   return <Download color='white'/>;
        case "search":   return <Download color='white'/>;

        default:      return  <img src={Download} />

    }
  }

export default IconFactory