import ServicesStylePage from "../../Styles/Services/ServiceStylePage"
import AllCarrousel from "../Carrousel/Carrousel"

function Corporate () {
    return(
        <ServicesStylePage>
        <div>
            <p>
                <img className="picture" src={require('../../assets/carousel_test.png')} alt="mariage" />
            </p>
            <p id="corporate_txt" className="txt">
                <h1>Corporate.</h1>
                
                <span className="sous_txt">
                <span className="trait_horizontal_top" />
                <span className="trait_vertical_top" />
                Si vous souhaitez améliorer votre communication et augmenter votre visibilité 
                auprès de vos clients, nous sommes également  là pour vous !<br />Vidéos en interne 
                pour communiquer au mieux avec vos équipes ou alors vidéos externes pour mettre 
                en valeur vos produits et booster votre image de marques, nous allons vous 
                aider à relever ces défis !
                <span className="trait_horizontal_bot"   ></span>
                <span className="trait_vertical_bot" />
                </span>
                
                
            </p>
        </div>
        </ServicesStylePage>
    )
}

export default Corporate