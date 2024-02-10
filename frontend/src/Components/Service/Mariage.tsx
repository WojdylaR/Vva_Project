import { useContext } from "react"
import ServicesStylePage from "../../Styles/Services/ServiceStylePage"
import AllCarrousel from "../Carrousel/Carrousel"
import { LangueContext } from "../../App"

function Mariage () {

    const {langue} = useContext(LangueContext)
    let pic_carroussel = [ "mariage/mariage2.jpg",
                            "mariage/mariage3.jpg",
                            "mariage/mariage5.jpg",
                            "mariage/mariage4.jpg",
                            "mariage/mariage1.jpg",]


    return(
        
        <ServicesStylePage>
            {langue == 'fr' ?
        <div className="service_page">
            <div>
            <img className="hide" src={require("../../assets/pic_service/mariage/mariage1.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/mariage/mariage2.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/mariage/mariage3.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/mariage/mariage4.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/mariage/mariage5.jpg")} alt="" />
        </div >
            <div className="grille">
                <div className="grid_item" >
                    <p className="picture">               
                <AllCarrousel picture={pic_carroussel}/>
            </p> 
                </div>
                <div className="grid_item">
                    <p className="txt" style={{}}>
                <h1>Mariage. 👰🤵</h1>
                <span className="sous_txt">
                <span className="trait_horizontal_top" />
                <span className="trait_vertical_top" />
            Vous souhaitez garder un souvenir mémorable d'un moment qui devrait rester comme l'un des plus beaux
             de votre vie 💍 ?<br />Nous sommes là pour vous et voulons vous accompagner dans toutes les étapes de ce moment 
             magique aux côtés des êtres qui vous sont chères 👰🤵 ... demande en mariage, préparatifs, cérémonie, 
             réceptions ... un package sur-mesure pour des prix dérisoires.. <br />Réservez-nous une coupe de champagne 🥂 
             ainsi qu'une part de gâteau 🍰 et nous débarquons sur le champ !
             <span className="trait_horizontal_bot"></span>
                        <span className="trait_vertical_bot" />
                        </span>
                    </p>
                </div>
            </div>
        </div> : 
        <div className="service_page">
        <div>
        <img className="hide" src={require("../../assets/pic_service/mariage/mariage1.jpg")} alt="" />
        <img className="hide" src={require("../../assets/pic_service/mariage/mariage2.jpg")} alt="" />
        <img className="hide" src={require("../../assets/pic_service/mariage/mariage3.jpg")} alt="" />
        <img className="hide" src={require("../../assets/pic_service/mariage/mariage4.jpg")} alt="" />
        <img className="hide" src={require("../../assets/pic_service/mariage/mariage5.jpg")} alt="" />
    </div >
        <div className="grille">
            <div className="grid_item" >
                <p className="picture">               
            <AllCarrousel picture={pic_carroussel}/>
        </p> 
            </div>
            <div className="grid_item">
                <p className="txt" style={{}}>
            <h1>Wedding. 👰🤵</h1>
            <span className="sous_txt">
            <span className="trait_horizontal_top" />
            <span className="trait_vertical_top" />
            Do you want to keep a memorable memory of a moment that should remain one of the most beautiful in your life 💍? <br />
    We are here for you and want to accompany you through all the stages of this magical moment alongside your loved ones 👰🤵... from the proposal, preparations, ceremony, receptions... a tailor-made package at ridiculous prices..<br />
    Reserve us a glass of champagne 🥂 and a slice of cake 🍰 and we'll be there in no time!
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

export default Mariage