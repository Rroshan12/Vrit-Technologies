import React from 'react'
import Home from './Home'
import Settings from './Settings'
import Search from './Search'

function IconFactory({iconName, color}) {
 

    switch (iconName)
    {
        case "home":  return <Home color={color}/>
        case "setting": return <Settings color={color}/>
        case "search": return <Search color={color}/>
        default: return <Home/>
    }



}

export default IconFactory