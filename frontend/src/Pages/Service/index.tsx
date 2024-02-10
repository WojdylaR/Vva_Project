import { useContext } from "react";
import ServicesStyle from "../../Styles/Services/ServicesStyle";
import {Link} from "react-router-dom"
import { LangueContext } from "../../App";

const Card = (props:any) => (
    <div className="card">
        <video autoPlay muted loop  className="video" src={require(`../../assets/video_service/${props.link}`)} />
        <div className="tittle_serv">{props.tittle}</div>
    </div>
)

function Service(){

    const {langue} = useContext(LangueContext)

    return (
        <ServicesStyle>
            {langue == 'fr' ? 
        <div className="service">
            <div className="grille">
                <div className="grid_item">
                    <Link className="link" id="mariage" to="/service/mariage">
                        <Card link="mariage_video.mp4" tittle="Mariage"/>
                    </Link>
                </div>
                <div className="grid_item">
                    <Link className="link" id="mariage" to="/service/documentaire">
                        <Card link="corporate_video.mp4"  tittle="Documentaire"/>
                    </Link>
                </div>
                <div className="grid_item">
                    <Link className="link" id="mariage" to="/service/corporate">
                        <Card link="captation_video.mp4"  tittle="Corporate"/>
                    </Link>
                </div>
                <div className="grid_item">
                    <Link className="link" id="mariage" to="/service/evenement">
                        <Card link="evenement_video.mp4"  tittle="Evenement"/>
                    </Link>
                </div>
                <div className="grid_item">
                    <Link className="link" id="mariage" to="/service/fiction">
                        <Card link="fiction_video.mp4"  tittle="Fiction"/>
                    </Link>
                </div>
                <div className="grid_item">
                    <Link className="link" id="mariage" to="/service/patrimoine">
                        <Card link="immobilier_video.mp4"  tittle="Patrimoine"/>
                    </Link>
                </div>
            </div>
        </div> : 
        <div className="service">
        <div className="grille">
            <div className="grid_item">
                <Link className="link" id="mariage" to="/service/mariage">
                    <Card link="mariage_video.mp4" tittle="Wedding"/>
                </Link>
            </div>
            <div className="grid_item">
                <Link className="link" id="mariage" to="/service/documentaire">
                    <Card link="corporate_video.mp4"  tittle="Documentary"/>
                </Link>
            </div>
            <div className="grid_item">
                <Link className="link" id="mariage" to="/service/corporate">
                    <Card link="captation_video.mp4"  tittle="Corporate"/>
                </Link>
            </div>
            <div className="grid_item">
                <Link className="link" id="mariage" to="/service/evenement">
                    <Card link="evenement_video.mp4"  tittle="Event"/>
                </Link>
            </div>
            <div className="grid_item">
                <Link className="link" id="mariage" to="/service/fiction">
                    <Card link="fiction_video.mp4"  tittle="Fiction"/>
                </Link>
            </div>
            <div className="grid_item">
                <Link className="link" id="mariage" to="/service/patrimoine">
                    <Card link="immobilier_video.mp4"  tittle="Heritage"/>
                </Link>
            </div>
        </div>
    </div> }
        </ServicesStyle>
    )
}

export default Service