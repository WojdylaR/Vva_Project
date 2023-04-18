import {useState} from "react";
import ContactStyle from "../../Styles/Contact/ContactStyle";
import axios from "axios";



function Contact(){
    const [message, setMessage] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [mail, setMail] = useState("");
    const [numero, setNumero] = useState("");
    const [adresse, setAdresse] = useState("")
    const [entreprise, setEntreprise] = useState("")

    const API_KEY= "17d7fcce8d579965da3a47743b75490f40c33e377379cdad93cdfadb7f547595"

    const handleChange = (event:any) => {
        setMessage(event.target.value);
        console.log(message)
    }
    const sendMail = () => {
        const allMessage = "Nom: " + nom + ", Prenom:" + prenom + ", Mail: " + mail + ", Numéro: " + numero + ", Message:" + message + ", Adresse: " + adresse + ", Entreprise: " + entreprise;
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
            <div className="contact">
                <div className="grille">
                <div id="grid_item">
                <div className="scnd_div">
            <h2 className="scnd_tittle">Un projet ou une envie de vidéo ?</h2><p id="txt_scnd_div">
            <span className="trait_horizontal_top" />
            <span className="trait_vertical_top" />Envoyez-nous un message pour que nous 
            puissions y réfléchir brièvement avec notre équipe de production, on vous rappelle et on en discute ? 🙂<br/>
            <span className="trait_horizontal_bot"></span>
            <span className="trait_vertical_bot" /></p>
            <p className="contact_numero">
                <span className="prenom">Félix & Pierre</span><br/>
                <span className="fondateur">Co-fondateurs</span><br />
                <span className="num"><img className="logo_phone"  src={require('../../assets/logo/logo_phone.png')} alt="phone" />:<h3 className="numero1">0625581625</h3></span><span className="num"><img className="logo_phone"  src={require('../../assets/logo/logo_phone.png')} alt="phone" />:<h3 className="numero2">0618995138</h3></span>
            </p>
            </div>
            </div> 
                    <div id="grid_item">
                <h1 className="tittle_contact"><span className="red">NOUS</span> CONTACTER</h1>
                <div className="all_input">
                    <div id="grille_info">
                        <div className="info_item">
                    <span className="info">
                        <input type="text" autoComplete="off" onChange={e => {setPrenom(e.target.value)}}/>
                        <label className="lab" htmlFor="prenom">Prenom<span className="red">*</span></label>
                        </span>
                        </div><div className="info_item">
                    <span className="info">
                        <input type="text" autoComplete="off" onChange={e => {setNom(e.target.value)}}/>
                        <label className="lab" htmlFor="nom">Nom<span className="red">*</span></label>
                    </span>
                    </div><div className="info_item">
                    <span className="info">
                        <input type="text" autoComplete="off" onChange={e => {setMail(e.target.value)}}/>
                        <label className="lab" htmlFor="mail">Mail<span className="red">*</span></label></span>
                        </div><div className="info_item">
                    <span className="info" >
                        <input type="text" autoComplete="off" onChange={e => {setNumero(e.target.value)}}/>
                        <label className="lab" htmlFor="telephone">Téléphone<span className="red">*</span></label>
                    </span>
                    </div><div className="info_item">
                    <span className="info">
                        <input type="text" autoComplete="off" onChange={e => {setAdresse(e.target.value)}}/>
                        <label className="lab" htmlFor="mail">Adresse</label></span>
                        </div><div className="info_item">
                    <span className="info" >
                        <input type="text" autoComplete="off" onChange={e => {setEntreprise(e.target.value)}}/>
                        <label className="lab" htmlFor="telephone">Entreprise</label></span>
                        </div>
                </div>
                <div id="txt_to_send">
            <input type="text" id="champTxt" onChange={e => {setMessage(e.target.value)}}/><br /> 
            <button id="button" onClick={sendMail
            }>Envoyer</button><br/>
            <p className="obli"><span className="red">* champs obligatoire</span></p>
        </div>      
            </div></div>
            
            </div>
            </div>
        </ContactStyle>
    )
}

export default Contact