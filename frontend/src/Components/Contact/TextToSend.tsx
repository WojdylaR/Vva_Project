import React, { useState } from "react";
import axios from 'axios';
import { TiLockClosedOutline } from "react-icons/ti";



function TextToSend(){
    const [message, setMessage] = useState("");

    const API_KEY= "17d7fcce8d579965da3a47743b75490f40c33e377379cdad93cdfadb7f547595"
    
    const handleChange = (event:any) => {
        setMessage(event.target.value);
        console.log(message)
    }

    const sendMail = () =>{
        axios({
        method: "POST",
        url: `https://api.mailslurp.com/sendEmail?apiKey=${API_KEY}`,
        data: {
          senderId: "f832dfb1-99d2-40fe-b41c-f763043afa9e",
          to: "f832dfb1-99d2-40fe-b41c-f763043afa9e@mailslurp.com",
          subject: "Hello inbox 2",
          body: message,
        },
      });
        console.log(message);
    };
    

    return(
        <div id="txt_to_send">
            <input type="text" id="champTxt" onChange={handleChange}/><br /> 
            <button id="button" onClick={() => sendMail()}>Envoyer</button>
            <p id="test">Hello world !</p>
        </div>
    )
}

export default TextToSend