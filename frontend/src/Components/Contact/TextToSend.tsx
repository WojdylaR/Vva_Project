import React from "react";

function TextToSend(){
    return(
        <div>
            <p className="txttosend">Message<span className="red">*</span> :<input type="text" className="champTxt"/></p>
            <p><button className="button">Envoyer</button></p>
        </div>
    )
}

export default TextToSend