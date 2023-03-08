import ServicesStylePage from "../../Styles/Services/ServiceStylePage"
import AllCarrousel from "../Carrousel/Carrousel"

function Corporate () {
    return(
        <ServicesStylePage>
        <div>
            <p>
                <AllCarrousel />
            </p>
            <p id="corporate_txt" className="txt">
                Si vous souhaitez améliorer votre communication et augmenter votre visibilité 
                auprès de vos clients, nous sommes également  là pour vous !<br />Vidéos en interne 
                pour communiquer au mieux avec vos équipes ou alors vidéos externes pour mettre 
                en valeur vos produits et booster votre image de marques, nous allons vous 
                aider à relever ces défis !
            </p>
        </div>
        </ServicesStylePage>
    )
}

export default Corporate