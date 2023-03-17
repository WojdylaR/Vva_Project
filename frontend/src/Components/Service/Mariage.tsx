import ServicesStylePage from "../../Styles/Services/ServiceStylePage"
import AllCarrousel from "../Carrousel/Carrousel"

function Mariage () {
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
                <h1>Mariage.</h1>
                <span className="sous_txt">
                <span className="trait_horizontal_top" />
                <span className="trait_vertical_top" />
            Vous souhaitez garder un souvenir mémorable d'un moment qui devrait rester comme l'un des plus beaux
             de votre vie ?<br />Nous sommes là pour vous et voulons vous accompagner dans toutes les étapes de ce moment 
             magique aux côtés des êtres qui vous sont chères ... demande en mariage, préparatifs, cérémonie, 
             réceptions ... un package sur-mesure pour des prix dérisoires.. <br />Réservez-nous une coupe de champagne 
             ainsi qu'une part de gâteau et nous débarquons sur le champ !
             <span className="trait_horizontal_bot"   ></span>
                <span className="trait_vertical_bot" />
                </span>
                
                
            </p>
        </div>
        </ServicesStylePage>
    )
}

export default Mariage