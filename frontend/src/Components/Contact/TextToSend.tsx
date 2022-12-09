import React from "react";

function TextToSend(){
    return(
        <div id="txt_to_send">
            <p className="txttosend">Message<span className="red">*</span> :<input type="text" className="champTxt"/>
            <button id="button">Envoyer</button></p>
        </div>
    )
}

export default TextToSend