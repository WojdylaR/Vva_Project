import React from "react";
import Footer from "../../Components/Footer";
import DonsSyle from "../../Styles/Dons/DonsStyle";

function Don(){
    return (
    <DonsSyle>
        <div id="don">
            <img id="photo" src={require('../../assets/felix+pierre.png')} alt="felix et pierre" /><br />
            <h2>#BE <span >OUR</span> HERO</h2><br />
            <a href="https://fr.tipeee.com/va-voir-ailleurs"><img id="logo_tipeee" src={require('../../assets/BoutonTip_SoutenezNous_Tipeee.gif')} alt="logo_tipee" /></a><br /><br />
            Petite citation bien sympatoche 
        </div>
    </DonsSyle>
    )
}

export default Don