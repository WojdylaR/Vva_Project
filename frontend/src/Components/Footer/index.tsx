import React from "react";
import { Link } from "react-router-dom";
import FooterStyle from "../../Styles/Footer/FooterStyle";
import ReseauSocio from "./reseau_socio";

function Footer(){
    return(
        <FooterStyle>
            <div className="footer">
            <div id="bordertop"></div>
                <h4 id="sous_titre">Un projet ? on s’appelle ? On en discute ? 🙂</h4>
                    <button ><Link className="link" id="Contact"to="/contact">Contact</Link></button>
            </div>
        </FooterStyle>
    )
}

export default Footer