import React from "react";
import TextToSend from "../../Components/Contact/TextToSend";
import Footer from "../../Components/Footer";
import ContactStyle from "../../Styles/Contact/ContactStyle";

function Contact(){
    return (
        <ContactStyle>
            <div>
                <p id="tittle" className="tittle">N'hesitez pas a nous contacter pour plus de questions !</p>
                <p className="input"><p id="nom" className="info"><span className="inputTittle">Nom :</span><br/><input className="champ"/></p>
                <p id="prenom" className="info"><span className="inputTittle">Prénom :</span><br/><input className="champ"/></p>
                <p id="mail" className="info"><span className="inputTittle">Mail : </span><br/><input className="champ"/></p>
                <p id="send"><TextToSend /></p></p>
            </div>
        </ContactStyle>
    )
}

export default Contact