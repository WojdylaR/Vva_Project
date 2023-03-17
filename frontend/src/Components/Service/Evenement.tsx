import ServicesStylePage from "../../Styles/Services/ServiceStylePage"
import AllCarrousel from "../Carrousel/Carrousel"

function Evenement () {
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
            <p id="evenement_txt" className="txt">
                <h1>Evenement.</h1>
                <span className="sous_txt">
                <span className="trait_horizontal_top" />
                <span className="trait_vertical_top" />
            Comme vous l'aurez sûrement compris, nous sommes multi-tâches et surtout motivés 
            à vous aider à garder en mémoires des souvenirs marquants! Professionnels, 
            particuliers ou encore bénévoles dans le milieu associatif, nous serons là pour 
            vos anniversaires, salons, concerts, festivals ou même évènements sportifs !<br />             Enfin, si vous débutez dans la musique et voulez mettre en images votre talent, 
             nous proposons aussi d'assurer la réalisation de vos clips musicaux!
             <span className="trait_horizontal_bot"   ></span>
                <span className="trait_vertical_bot" />
                </span>
                
                
            </p>
        </div>
        </ServicesStylePage>
    )
}

export default Evenement