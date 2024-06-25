import React from 'react'
import Address from './Address'
import Email from './Email'
import Phone from './Phone'
import Basket from './Basket'

function IconFactory({type}) {
    switch(type)
    {
        case 'email': return <Email/>
        case 'address': return <Address/>
        case 'phone': return <Phone/>
        case 'basket': return <Basket/>
        default: return <Email/>
    }
}

export default IconFactory