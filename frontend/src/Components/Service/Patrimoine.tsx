import { useContext } from "react"
import ServicesStylePage from "../../Styles/Services/ServiceStylePage"
import AllCarrousel from "../Carrousel/Carrousel"
import { LangueContext } from "../../App"

function Patrimoine () {

    const {langue} = useContext(LangueContext)
    let pic_carroussel = [ "patrimoine/patrimoine3.jpg",
                            "patrimoine/patrimoine5.jpg",
                            "patrimoine/patrimoine4.jpg",
                            "patrimoine/patrimoine1.jpg",
                            "patrimoine/patrimoine2.jpg",]


    return(
        
        <ServicesStylePage>
            {langue == 'fr' ?
        <div className="service_page">
            <div>
            <img className="hide" src={require("../../assets/pic_service/patrimoine/patrimoine1.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/patrimoine/patrimoine2.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/patrimoine/patrimoine3.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/patrimoine/patrimoine4.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/patrimoine/patrimoine5.jpg")} alt="" />
        </div >
            <div className="grille">
                <div className="grid_item" >
                    <p className="picture">               
                <AllCarrousel picture={pic_carroussel}/>
            </p> 
                </div>
                <div className="grid_item">
                    <p className="txt">
                <h1>Patrimoine. 🏡</h1>
                <span className="sous_txt">
                <span className="trait_horizontal_top" />
                <span className="trait_vertical_top" />
                La diversité de nos services proposés comporte également le domaine du patrimoine 🏡!   Vous 
                souhaitez mettre en valeur un bien immobilier dans le but de le revendre 💵 par 
                la suite ?<br />
                Faire la promotion d'un village 🏘, d'un monument 🏛 ou d'un artisanat local ? <br />
                Nous sommes là pour vous accompagner mettre en lumière les lieux ou objets qui vous tiennent
                     à coeur !
                     <span className="trait_horizontal_bot"></span>
                        <span className="trait_vertical_bot" />
                        </span>
                    </p>
                </div>
            </div>
        </div> : 
        <div className="service_page">
        <div>
        <img className="hide" src={require("../../assets/pic_service/patrimoine/patrimoine1.jpg")} alt="" />
        <img className="hide" src={require("../../assets/pic_service/patrimoine/patrimoine2.jpg")} alt="" />
        <img className="hide" src={require("../../assets/pic_service/patrimoine/patrimoine3.jpg")} alt="" />
        <img className="hide" src={require("../../assets/pic_service/patrimoine/patrimoine4.jpg")} alt="" />
        <img className="hide" src={require("../../assets/pic_service/patrimoine/patrimoine5.jpg")} alt="" />
    </div >
        <div className="grille">
            <div className="grid_item" >
                <p className="picture">               
            <AllCarrousel picture={pic_carroussel}/>
        </p> 
            </div>
            <div className="grid_item">
                <p className="txt">
            <h1>Heritage. 🏡</h1>
            <span className="sous_txt">
            <span className="trait_horizontal_top" />
            <span className="trait_vertical_top" />
            The diversity of our offered services also includes the field of heritage 🏡! Do you want to highlight a real estate property with the intention of selling it 💵 later on?<br />
                    Promote a village 🏘, a monument 🏛, or local craftsmanship? <br />
                    We are here to help you showcase the places or objects that are dear to your heart!
                    
                 <span className="trait_horizontal_bot"></span>
                    <span className="trait_vertical_bot" />
                    </span>
                </p>
            </div>
        </div>
    </div> }
        </ServicesStylePage>
    )
}

export default Patrimoine