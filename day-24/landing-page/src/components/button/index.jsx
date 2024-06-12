import React from "react";
import { GetInTouch, KnowMe, Submit } from "./buttonStyle";

function ButtonFactory({type}) {

    switch(type)
    {
        case 'submit': return <Submit>Submit</Submit>
        case 'knowme': return <KnowMe>Know Me</KnowMe>
        case 'getintouch': return <GetInTouch>Get in touch</GetInTouch>
        default: return <Submit>Submit</Submit>
    }


 

;
}

export default ButtonFactory;
