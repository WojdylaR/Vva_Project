import ServicesStylePage from "../../Styles/Services/ServiceStylePage"
import AllCarrousel from "../Carrousel/Carrousel"

function Patrimoine () {
    let pic_carroussel = [ "patrimoine/patrimoine3.jpg",
                            "patrimoine/patrimoine5.jpg",
                            "patrimoine/patrimoine4.jpg",
                            "patrimoine/patrimoine1.jpg",
                            "patrimoine/patrimoine2.jpg",]


    return(
        
        <ServicesStylePage>
        <div>
        <div>
            <img className="hide" src={require("../../assets/pic_service/patrimoine/patrimoine1.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/patrimoine/patrimoine2.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/patrimoine/patrimoine3.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/patrimoine/patrimoine4.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/patrimoine/patrimoine5.jpg")} alt="" />
        </div>
            <p>                
                <AllCarrousel picture={pic_carroussel}/>
            </p>
            <p className="txt">
                <h1>Patrimoine.</h1>
                <span className="sous_txt">
                <span className="trait_horizontal_top" />
                <span className="trait_vertical_top" />
                La diversité de nos services proposés comporte également le domaine du patrimoine 🏡!   Vous 
                souhaitez mettre en valeur un bien immobilier dans le but de le revendre 💵 par 
                la suite ?<br />
                Faire la promotion d'un village 🏘, d'un monument 🏛 ou d'un artisanat local ? <br />
                Nous sommes là pour vous accompagner mettre en lumière les lieux ou objets qui vous tiennent
                     à coeur !
                     <span className="trait_horizontal_bot"   ></span>
                <span className="trait_vertical_bot" />
                </span>
            </p>
        </div>
        </ServicesStylePage>
    )
}

export default Patrimoine