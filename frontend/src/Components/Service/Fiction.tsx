import ServicesStylePage from "../../Styles/Services/ServiceStylePage"
import AllCarrousel from "../Carrousel/Carrousel"

function Fiction () {
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
            <p className="txt">
                <h1>Fiction.</h1>
                <span className="sous_txt">
                <span className="trait_horizontal_top" />
                <span className="trait_vertical_top" />
            Avec des membres reconnus pour leur polyvalence et leur capacité à s'adapter en toutes 
            circonstances, nous vous proposons de vous accompagner dans la réalisation de vos 
            fictions ou court-métrages en tous genres: de la régie au son en passant par la lumière 
            en allant même jusqu'à l'écriture ou la propositions d'idées, nous sommes votre solution !
            <span className="trait_horizontal_bot"   ></span>
                <span className="trait_vertical_bot" />
                </span>
                
                
            </p>
        </div>
        </ServicesStylePage>
    )
}

export default Fiction