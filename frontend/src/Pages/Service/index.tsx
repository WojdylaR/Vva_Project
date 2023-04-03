import ServicesStyle from "../../Styles/Services/ServicesStyle";
import {Link} from "react-router-dom"

const Card = (props:any) => (
    <div className="card">
        <video autoPlay muted loop  className="video" src={require(`../../assets/video_service/${props.link}`)} />
        <div className="tittle_serv">{props.tittle}</div>
    </div>
)

function Service(){
    return (
        <ServicesStyle>
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
        </div>
        </ServicesStyle>
    )
}



function Toto(){

    return (
        <ServicesStyle>
        <div id="all">
            <div id="menu">
                <nav>
                    <Link className="link" id="mariage" to="/service/mariage">
                        <video autoPlay muted loop  className="img" src={require('../../assets/video_service/mariage_video.mp4')} />
                        <span className="tittle_link" >
                            Mariage</span></Link>
                    <Link className="link" id="mariage" to="/service/documentaire">
                        <video autoPlay muted loop className="img" src={require('../../assets/video_service/corporate_video.mp4')} />
                        <span className="tittle_link" >
                            Documentaire</span></Link>
                    <Link className="link" id="mariage" to="/service/corporate">
                        <video  autoPlay className="img" muted loop  src={require('../../assets/video_service/captation_video.mp4')} />
                        <span className="tittle_link" >
                            Corporate</span></Link>
                    <Link className="link" id="mariage" to="/service/evenement">
                        <video autoPlay muted loop className="img" src={require('../../assets/video_service/evenement_video.mp4')} />
                        <span className="tittle_link" >
                            Evenement</span></Link>
                            <Link className="link" id="mariage" to="/service/fiction">
                        <video autoPlay muted loop className="img" src={require('../../assets/video_service/fiction_video.mp4')} />
                        <span className="tittle_link" >
                            Fiction</span></Link>
                            <Link className="link" id="mariage" to="/service/patrimoine">
                        <video autoPlay muted loop className="img" src={require('../../assets/video_service/immobilier_video.mp4')} />
                        <span className="tittle_link" >
                            Patrimoine</span ></Link>
                    
                </nav>
            </div>
        </div>
        </ServicesStyle>
    )
}

export default Service