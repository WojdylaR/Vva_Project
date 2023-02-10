import React from "react";
import axios from 'axios';



function TextToSend(){
    const API_KEY= "17d7fcce8d579965da3a47743b75490f40c33e377379cdad93cdfadb7f547595"
    async function createInbox() {
        return await axios
          .post(`https://api.mailslurp.com/createInbox?apiKey=${API_KEY}`)
          .then((res:any) => 
          res.data);
      }
    
    const sendMail = () =>{  axios({
        method: "POST",
        url: `https://api.mailslurp.com/sendEmail?apiKey=${API_KEY}`,
        data: {
          senderId: "f832dfb1-99d2-40fe-b41c-f763043afa9e",
          to: "f832dfb1-99d2-40fe-b41c-f763043afa9e@mailslurp.com",
          subject: "Hello inbox 2",
          body: document.getElementById("champTxt"),
        },
      })};
    

    return(
        <div id="txt_to_send">
            <input type="text" id="champTxt"/><br /> 
            <button id="button" onClick={() => sendMail()}>Envoyer</button>
        </div>
    )
}

export default TextToSend