import React from "react";
import TextToSend from "../../Components/Contact/TextToSend";
import Footer from "../../Components/Footer";
import ContactStyle from "../../Styles/Contact/ContactStyle";

function Contact(){
    return (
        <ContactStyle>
            <div id="all_input">
                <p className="tittle_contact"><span className="red">NOUS</span> CONTACTER</p>

                <p className="input">
                    <p id="nom" className="info">
                        <span className="inputTittle">Nom<span className="red">*</span> :</span>
                        <span className="inputTittle2">Prénom<span className="red">*</span> :</span><br/>
                        <input className="champ" />
                        <input className="champ2"/>
                    </p>
                    <br />
                    <p id="prenom" className="info">
                        <span className="inputTittle">Mail<span className="red">*</span> :</span>
                        <span className="inputTittle2">Numéro de téléphone<span className="red">*</span> : </span><br/>
                        <input className="champ"/>
                        <input className="champ2"/>
                    </p>
                    <p id="send"><TextToSend />
                    <p id="obli"><span className="red">* champs obligatoire</span></p></p>
                </p>
            </div>
            <div id="second_div">
                Ceci et la second div
            </div>
        </ContactStyle>
    )
}

export default Contact