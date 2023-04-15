import ServicesStylePage from "../../Styles/Services/ServiceStylePage"
import AllCarrousel from "../Carrousel/Carrousel"

function Corporate () {
    let pic_carroussel = [ "corporate/corpo1.png",
                            "corporate/corpo2.png",
                            "corporate/corpo4.jpg",
                            "corporate/corpo3.png",
                            "corporate/corpo5.jpg",]


    return(
        
        <ServicesStylePage>
        <div className="service_page">
            <div>
                <img className="hide" src={require("../../assets/pic_service/corporate/corpo1.png")} alt="" />
               <img className="hide" src={require("../../assets/pic_service/corporate/corpo2.png")} alt="" />
                <img className="hide" src={require("../../assets/pic_service/corporate/corpo3.png")} alt="" />
                <img className="hide" src={require("../../assets/pic_service/corporate/corpo4.jpg")} alt="" />
                <img className="hide" src={require("../../assets/pic_service/corporate/corpo5.jpg")} alt="" />
            </div >
            <div className="grille">
                <div className="grid_item" >
                    <p className="picture">          
                        <AllCarrousel picture={pic_carroussel}/>
                    </p> 
                </div>
                <div className="grid_item">
                    <p className="txt">
                        <h1>Corporate. 📊</h1>
                        <span className="sous_txt">
                        <span className="trait_horizontal_top" />
                        <span className="trait_vertical_top" />
                        Si vous souhaitez améliorer votre communication 🗣 et augmenter votre visibilité 📈 
                        auprès de vos clients, nous sommes également  là pour vous !<br />Vidéos 🎬 en interne 
                        pour communiquer au mieux avec vos équipes ou alors vidéos externes pour mettre 
                        en valeur voss produits et booster 🚀 votre image de marques, nous allons vous 
                        aider à relever ces défis !
                        <span className="trait_horizontal_bot"></span>
                        <span className="trait_vertical_bot" />
                        </span>
                    </p>
                </div>
            </div>
        </div>
        </ServicesStylePage>
    )
}

export default Corporate