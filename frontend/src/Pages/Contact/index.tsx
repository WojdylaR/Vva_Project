import React from "react";
import TextToSend from "../../Components/Contact/TextToSend";
import Footer from "../../Components/Footer";
import ContactStyle from "../../Styles/Contact/ContactStyle";



function Contact(){
    return (
        <ContactStyle>
            <div id="all_input">
                <h1 className="tittle_contact"><span className="red">NOUS</span> CONTACTER</h1>

                <div id="info">
                    <span className="top"><span className="info">
                        <input type="text" autoComplete="off" />
                        <label className="lab" htmlFor="prenom">Prenom</label>
                    </span>
                    <span className="info">
                        <span className="right"><input type="text" autoComplete="off" />
                        <label className="lab" htmlFor="nom">Nom</label></span>
                    </span></span>
                    <br />
                    <span className="info"><span id="bot">
                        <input type="text" autoComplete="off" />
                        <label className="lab" htmlFor="mail">Mail</label></span>
                    </span>
                    <span className="info" ><span id="bot">
                        <span className="right"><input type="text" autoComplete="off" />
                        <label className="lab" htmlFor="telephone">Téléphone</label></span></span>
                    </span>
                    
                </div>
                <p id="send"><TextToSend />
                    <p id="obli"><span className="red">* champs obligatoire</span></p></p>
            </div>
            <div id="second_div">
            <h2>Un projet où une envie de vidéo ?</h2><p id="txt_scnd_div">Envoyez-nous un message pour que nous 
            puissions y réfléchir brièvement avec notre équipe de production, on vous rappelle et on en discute ? 🙂</p>
            </div>
        </ContactStyle>
    )
}

export default Contact