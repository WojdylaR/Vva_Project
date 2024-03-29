import { useContext } from "react"
import ServicesStylePage from "../../Styles/Services/ServiceStylePage"
import AllCarrousel from "../Carrousel/Carrousel"
import { LangueContext } from "../../App"

function Evenement () {

    const {langue} = useContext(LangueContext)
    let pic_carroussel = [ "evenement/evenement5.jpg",
                            "evenement/evenement2.jpg",
                            "evenement/evenement3.jpg",
                            "evenement/evenement4.jpg",
                            "evenement/evenement1.jpg",]


    return(
        
        <ServicesStylePage>
            {langue =='fr' ?
        <div className="service_page">
            <div>
            <img className="hide" src={require("../../assets/pic_service/evenement/evenement1.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/evenement/evenement2.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/evenement/evenement3.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/evenement/evenement4.jpg")} alt="" />
            <img className="hide" src={require("../../assets/pic_service/evenement/evenement5.jpg")} alt="" />
        </div >
            <div className="grille">
                <div className="grid_item" >
                    <p className="picture">                 
                <AllCarrousel picture={pic_carroussel}/>
            </p> 
                </div>
                <div className="grid_item">
                    <p className="txt">
                <h1>Evenement. 🎆</h1>
                <span className="sous_txt">
                <span className="trait_horizontal_top" />
                <span className="trait_vertical_top" />
            Comme vous l'aurez sûrement compris, nous sommes multi-tâches et surtout motivés 
            à vous aider à garder en mémoires des souvenirs marquants! Professionnels, 
            particuliers ou encore bénévoles dans le milieu associatif, nous serons là pour 
            vos anniversaires 🎂, salons, concerts 🎸, festivals 🔊 ou même évènements sportifs 🏅 !<br />             Enfin, si vous débutez dans la musique et voulez mettre en images votre talent, 
             nous proposons aussi d'assurer la réalisation de vos clips musicaux 🎥 !
             <span className="trait_horizontal_bot"></span>
                        <span className="trait_vertical_bot" />
                        </span>
                    </p>
                </div>
            </div>
        </div> :
        <div className="service_page">
        <div>
        <img className="hide" src={require("../../assets/pic_service/evenement/evenement1.jpg")} alt="" />
        <img className="hide" src={require("../../assets/pic_service/evenement/evenement2.jpg")} alt="" />
        <img className="hide" src={require("../../assets/pic_service/evenement/evenement3.jpg")} alt="" />
        <img className="hide" src={require("../../assets/pic_service/evenement/evenement4.jpg")} alt="" />
        <img className="hide" src={require("../../assets/pic_service/evenement/evenement5.jpg")} alt="" />
    </div >
        <div className="grille">
            <div className="grid_item" >
                <p className="picture">                 
            <AllCarrousel picture={pic_carroussel}/>
        </p> 
            </div>
            <div className="grid_item">
                <p className="txt">
            <h1>Event. 🎆</h1>
            <span className="sous_txt">
            <span className="trait_horizontal_top" />
            <span className="trait_vertical_top" />
            As you've probably gathered, we're multitasking and especially motivated to help you preserve memorable moments! Whether you're professionals, individuals, or volunteers in the nonprofit sector, we'll be there for your birthdays 🎂, trade shows, concerts 🎸, festivals 🔊, or even sports events 🏅! <br /> 
    Finally, if you're just starting out in music and want to visually showcase your talent, we also offer to produce your music videos 🎥!
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

export default Evenement