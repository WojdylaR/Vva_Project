import React from "react";
import { Link } from "react-router-dom";
import FooterStyle from "../../Styles/Footer/FooterStyle";
import ReseauSocio from "./reseau_socio";

function Footer(){
    return(
        <FooterStyle>
            <div className="all">
            <div id="bordertop"></div>
                <p className="reseaux">
                    <ReseauSocio />
                    
                </p>
            </div>
        </FooterStyle>
    )
}

export default Footer