import React from 'react'
import Address from './Address'
import Email from './Email'
import Phone from './Phone'
import Basket from './Basket'
import EditIcon from './EditIcon'
import Delete from './Delete'

function IconFactory({type, handleClick}) {
    switch(type)
    {
        case 'email': return <Email/>
        case 'address': return <Address/>
        case 'phone': return <Phone/>
        case 'basket': return <Basket/>
        case 'edit': return <EditIcon handleClick={handleClick}/>
        case 'delete': return <Delete handleClick={handleClick}/>
        default: return <Email/>
    }
}

export default IconFactory