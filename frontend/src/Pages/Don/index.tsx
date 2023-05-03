import React from "react";
import Footer from "../../Components/Footer";
import DonsSyle from "../../Styles/Dons/DonsStyle";

function Don(){
    return (
    <DonsSyle>
        <div id="don">
            <img id="photo" src={require('../../assets/portraits/felix+pierre.png')} alt="felix et pierre" /><br />
            <h2 className="txt">"On pense qu'il n'y a une qu'une seule chose qu'on emmènera dans notre tombe,<br />c'est notre art !"</h2>
            <div className="logo_container"><img className="fleche_bas" id="haut_gauche" src={require('../../assets/logo/fleche_bas.png')} alt="felix et pierre" /><img className="fleche_bas" id="haut_droite" src={require('../../assets/logo/fleche_bas.png')} alt="felix et pierre" /></div>
            <a href="https://fr.tipeee.com/va-voir-ailleurs"><img id="logo_tipeee" src={require('../../assets/BoutonTip_SoutenezNous_Tipeee.gif')} alt="logo_tipee" /></a><br /><br />
            <div className="logo_container"><img className="fleche_bas" id="bas_gauche" src={require('../../assets/logo/fleche_bas.png')} alt="felix et pierre" /><img className="fleche_bas" id="bas_droite" src={require('../../assets/logo/fleche_bas.png')} alt="felix et pierre" /></div>
        </div>
    </DonsSyle>
    )
}

export default Don