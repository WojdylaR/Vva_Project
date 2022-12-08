import React from "react";
import { Link } from "react-router-dom";
import FooterStyle from "../../Styles/Footer/FooterStyle";
import ReseauSocio from "./reseau_socio";

function Footer(){
    return(
        <FooterStyle>
            <div className="footer">
            <div id="bordertop"></div>
                <h4 id="sous_titre">Envoyez-nous un message 🙂</h4>
                    <a className="contact"> <Link className="link" to="/contact">Contact</Link> </a>
            </div>
        </FooterStyle>
    )
}

export default Footer