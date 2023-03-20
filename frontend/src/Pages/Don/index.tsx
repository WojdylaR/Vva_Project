import React from "react";
import Footer from "../../Components/Footer";
import DonsSyle from "../../Styles/Dons/DonsStyle";

function Don(){
    return (
    <DonsSyle>
        <div id="don">
            <img id="photo" src={require('../../assets/felix+pierre.png')} alt="felix et pierre" /><br />
            <h2 className="txt">"On pense qu'il n'y a une qu'une seule chose qu'on emmènera dans notre tombe,<br />c'est notre art !"</h2>
            <a href="https://fr.tipeee.com/va-voir-ailleurs"><img id="logo_tipeee" src={require('../../assets/BoutonTip_SoutenezNous_Tipeee.gif')} alt="logo_tipee" /></a><br /><br />
        </div>
    </DonsSyle>
    )
}

export default Don