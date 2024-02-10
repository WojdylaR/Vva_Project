import { useContext } from "react"
import ServicesStylePage from "../../Styles/Services/ServiceStylePage"
import AllCarrousel from "../Carrousel/Carrousel"
import { LangueContext } from "../../App"

function Documentaire () {
    const {langue} = useContext(LangueContext)

    let pic_carroussel = [ "documentaire/documentaire1.jpg",
                            "documentaire/documentaire2.jpg",
                            "documentaire/documentaire3.jpg",
                            "documentaire/documentaire4.jpg",
                            "documentaire/documentaire5.jpg",]


    return(
        
        <ServicesStylePage>
            {langue == 'fr' ? 
        <div className="service_page">
            <div>
            <img className="hide" src={require("../../assets/pic_service/documentaire/documentaire1.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/documentaire/documentaire2.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/documentaire/documentaire3.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/documentaire/documentaire4.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/documentaire/documentaire5.jpg")} alt="" />
        </div >
            <div className="grille">
                <div className="grid_item" >
                    <p className="picture">         
                <AllCarrousel picture={pic_carroussel}/>
            </p> 
                </div>
                <div className="grid_item">
                    <p className="txt">
                <h1>Documentaire. 📺</h1>
                <span className="sous_txt">
                <span className="trait_horizontal_top" />
                <span className="trait_vertical_top" />
            Si nous proposons principalement à l'heure actuelle des réalisations personnelles de notre propres 
            documentaires 📸, nous sommes à l'écoute et prêts à vous aider dans l'un de vos projets !<br />
            Nous pouvons également vous proposer des vidéos 🎥 sur-mesures de vos vacances 🛫 de rêve pour 
            garder des souvenirs inoubliables !
            <span className="trait_horizontal_bot"></span>
                        <span className="trait_vertical_bot" />
                        </span>
                    </p>
                </div>
            </div>
        </div>:


<div className="service_page">
<div>
<img className="hide" src={require("../../assets/pic_service/documentaire/documentaire1.jpg")} alt="" />
<img className="hide" src={require("../../assets/pic_service/documentaire/documentaire2.jpg")} alt="" />
<img className="hide" src={require("../../assets/pic_service/documentaire/documentaire3.jpg")} alt="" />
<img className="hide" src={require("../../assets/pic_service/documentaire/documentaire4.jpg")} alt="" />
<img className="hide" src={require("../../assets/pic_service/documentaire/documentaire5.jpg")} alt="" />
</div >
<div className="grille">
    <div className="grid_item" >
        <p className="picture">         
    <AllCarrousel picture={pic_carroussel}/>
</p> 
    </div>
    <div className="grid_item">
        <p className="txt">
    <h1>Documentary. 📺</h1>
    <span className="sous_txt">
    <span className="trait_horizontal_top" />
    <span className="trait_vertical_top" />
    If we primarily offer personal creations of our own documentaries 📸 at the moment, we are attentive and ready to assist you with any of your projects! <br />
We can also provide you with tailor-made videos 🎥 of your dream vacations 🛫 to keep unforgettable memories!
<span className="trait_horizontal_bot"></span>
            <span className="trait_vertical_bot" />
            </span>
        </p>
    </div>
</div>
</div>}
        </ServicesStylePage>
    )
}

export default Documentaire