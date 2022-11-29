import React from "react";
import TextToSend from "../../Components/Contact/TextToSend";
import Footer from "../../Components/Footer";
import ContactStyle from "../../Styles/Contact/ContactStyle";

function Contact(){
    return (
        <ContactStyle>
            <div>
                <p className="tittle_contact"><span className="red">NOUS</span> CONTACTER</p>
                <p className="input"><p id="nom" className="info"><span className="inputTittle">Nom<span className="red">*</span> :</span><br/><input className="champ"/></p>
                <p id="prenom" className="info"><span className="inputTittle">Prénom<span className="red">*</span> :</span><br/><input className="champ"/></p>
                <p id="mail" className="info"><span className="inputTittle">Mail<span className="red">*</span> : </span><br/><input className="champ"/></p>
                <p id="send"><TextToSend /></p>
                <p id="obli"><span className="red">* champs obligatoire</span></p></p>
            </div>
        </ContactStyle>
    )
}

export default Contact