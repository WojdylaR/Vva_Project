import ServicesStylePage from "../../Styles/Services/ServiceStylePage"
import AllCarrousel from "../Carrousel/Carrousel"

function Documentaire () {
    let pic_carroussel = [ "corporate/corpo1.png",
                            "corporate/corpo2.png",
                            "corporate/corpo3.png",
                            "corporate/carousel_test.png",
                            "corporate/corpo1.png",]


    return(
        
        <ServicesStylePage>
        <div>
        <div>
            <img className="hide" src={require("../../assets/pic_service/corporate/corpo1.png")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/corporate/corpo2.png")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/corporate/corpo3.png")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/corporate/carousel_test.png")} alt="" />
        </div>
            <p>                
                <AllCarrousel picture={pic_carroussel}/>
            </p>
            <p id="documentaire_txt" className="txt">
            
                <h1>Documentaire.</h1>
                <span className="sous_txt">
                <span className="trait_horizontal_top" />
                <span className="trait_vertical_top" />
            Si nous proposons principalement à l'heure actuelle des réalisations personnelles de notre propres 
            documentaires 📸, nous sommes à l'écoute et prêts à vous aider dans l'un de vos projets !<br />
            Nous pouvons également vous proposer des vidéos 🎥 sur-mesures de vos vacances 🛫 de rêve pour 
            garder des souvenirs inoubliables !
            <span className="trait_horizontal_bot"   ></span>
                <span className="trait_vertical_bot" />
                </span>
                
                
            </p>
        </div>
        </ServicesStylePage>
    )
}

export default Documentaire