import { useContext } from "react"
import ServicesStylePage from "../../Styles/Services/ServiceStylePage"
import AllCarrousel from "../Carrousel/Carrousel"
import { LangueContext } from "../../App"

function Fiction () {

    const {langue} = useContext(LangueContext)
    let pic_carroussel = [ "fiction/fiction2.jpg",
                            "fiction/fiction3.jpg",
                            "fiction/fiction5.jpg",
                            "fiction/fiction4.jpg",
                            "fiction/fiction1.jpg",]


    return(
        
        <ServicesStylePage>
            {langue == 'fr' ?
       <div className="service_page">
            <div>
            <img className="hide" src={require("../../assets/pic_service/fiction/fiction1.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/fiction/fiction2.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/fiction/fiction3.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/fiction/fiction4.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/fiction/fiction5.jpg")} alt="" />
        </div >
            <div className="grille">
                <div className="grid_item" >
                    <p className="picture">             
                <AllCarrousel picture={pic_carroussel}/>
            </p> 
                </div>
                <div className="grid_item">
                    <p className="txt">
                <h1>Fiction. 🎬</h1>
                <span className="sous_txt">
                <span className="trait_horizontal_top" />
                <span className="trait_vertical_top" />
            Avec des membres reconnus pour leur polyvalence et leur capacité à s'adapter en toutes 
            circonstances, nous vous proposons de vous accompagner dans la réalisation de vos 
            fictions ou court-métrages 🎞 en tous genres: de la régie 🎬 au son 🔊 en passant par la lumière 💡 
            en allant même jusqu'à l'écriture 🖋 ou la propositions d'idées, nous sommes votre solution !
            <span className="trait_horizontal_bot"></span>
                        <span className="trait_vertical_bot" />
                        </span>
                    </p>
                </div>
            </div>
        </div> : 
        <div className="service_page">
        <div>
        <img className="hide" src={require("../../assets/pic_service/fiction/fiction1.jpg")} alt="" />
        <img className="hide" src={require("../../assets/pic_service/fiction/fiction2.jpg")} alt="" />
        <img className="hide" src={require("../../assets/pic_service/fiction/fiction3.jpg")} alt="" />
        <img className="hide" src={require("../../assets/pic_service/fiction/fiction4.jpg")} alt="" />
        <img className="hide" src={require("../../assets/pic_service/fiction/fiction5.jpg")} alt="" />
    </div >
        <div className="grille">
            <div className="grid_item" >
                <p className="picture">             
            <AllCarrousel picture={pic_carroussel}/>
        </p> 
            </div>
            <div className="grid_item">
                <p className="txt">
            <h1>Fiction. 🎬</h1>
            <span className="sous_txt">
            <span className="trait_horizontal_top" />
            <span className="trait_vertical_top" />
            With members known for their versatility and ability to adapt in all circumstances, we offer to accompany you in the creation of your fiction or short films 🎞 of all genres: from directing 🎬 to sound 🔊, lighting 💡, and even writing 🖋 or idea proposals, we are your solution!
    
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

export default Fiction