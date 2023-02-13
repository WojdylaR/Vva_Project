import {useState} from "react";
import ContactStyle from "../../Styles/Contact/ContactStyle";
import axios from "axios";



function Contact(){
    const [message, setMessage] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [mail, setMail] = useState("");
    const [numero, setNumero] = useState("");

    const API_KEY= "17d7fcce8d579965da3a47743b75490f40c33e377379cdad93cdfadb7f547595"

    const handleChange = (event:any) => {
        setMessage(event.target.value);
        console.log(message)
    }
    const sendMail = () => {
        const allMessage = "Nom: " + nom + " Prenom:" + prenom + " Mail: " + mail + " Numéro: " + numero + " Message:" + message;
        axios({
            method: "POST",
            url: `https://api.mailslurp.com/sendEmail?apiKey=${API_KEY}`,
            data: {
              senderId: "f832dfb1-99d2-40fe-b41c-f763043afa9e",
              to: "f832dfb1-99d2-40fe-b41c-f763043afa9e@mailslurp.com",
              subject: "Hello inbox 2",
              body: allMessage,
            },
          });
        console.log(allMessage);
    };


    return (
        <ContactStyle>
            <div id="all_input">
                <h1 className="tittle_contact"><span className="red">NOUS</span> CONTACTER</h1>

                <div id="info">
                    <span className="top"><span className="info">
                        <input type="text" autoComplete="off" onChange={e => {setPrenom(e.target.value)}}/>
                        <label className="lab" htmlFor="prenom">Prenom</label>
                    </span>
                    <span className="info">
                        <span className="right"><input type="text" autoComplete="off" onChange={e => {setNom(e.target.value)}}/>
                        <label className="lab" htmlFor="nom">Nom</label></span>
                    </span></span>
                    <br />
                    <span className="info"><span id="bot">
                        <input type="text" autoComplete="off" onChange={e => {setMail(e.target.value)}}/>
                        <label className="lab" htmlFor="mail">Mail</label></span>
                    </span>
                    <span className="info" ><span id="bot">
                        <span className="right"><input type="text" autoComplete="off" onChange={e => {setNumero(e.target.value)}}/>
                        <label className="lab" htmlFor="telephone">Téléphone</label></span></span>
                    </span>
                    
                </div>
                <div id="txt_to_send">
            <input type="text" id="champTxt" onChange={e => {setMessage(e.target.value)}}/><br /> 
            <button id="button" onClick={sendMail
            }>Envoyer</button>
            <p id="test">{message}</p>
        </div>
                    <p id="obli"><span className="red">* champs obligatoire</span></p>
            </div>
            <div id="second_div">
            <h2>Un projet où une envie de vidéo ?</h2><p id="txt_scnd_div">Envoyez-nous un message pour que nous 
            puissions y réfléchir brièvement avec notre équipe de production, on vous rappelle et on en discute ? 🙂</p>
            </div>
        </ContactStyle>
    )
}

export default Contact