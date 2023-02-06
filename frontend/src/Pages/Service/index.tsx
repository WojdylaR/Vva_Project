import React from "react";
import Footer from "../../Components/Footer";
import ServicesStyle from "../../Styles/Services/ServicesStyle";
import {Link} from "react-router-dom"






function Service(){
    const handleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
        e.currentTarget.play();

      };

      const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) => {
        e.currentTarget.play();
        
      };

    return (
        <ServicesStyle>
        <div id="all">
            <div id="menu">
                <nav>
                    <Link className="link" id="mariage" to="/service/mariage">
                        <video autoPlay muted loop  className="img" src={require('../../assets/mariage_video.mp4')} />
                        <span className="tittle_link" >
                            Mariage</span></Link>
                    <Link className="link" id="mariage" to="/service/corporate">
                        <video  autoPlay className="img" muted loop  src={require('../../assets/corporate_video.mp4')} />
                        <span className="tittle_link" >
                            Corporate</span></Link>
                    <Link className="link" id="mariage" to="/service/evenement">
                        <video autoPlay muted loop className="img" src={require('../../assets/evenement_video.mp4')} />
                        <span className="tittle_link" >
                            Evenement</span></Link>
                            <Link className="link" id="mariage" to="/service/fiction">
                        <video autoPlay muted loop className="img" src={require('../../assets/fiction_video.mp4')} />
                        <span className="tittle_link" >
                            Fiction</span></Link>
                            <Link className="link" id="mariage" to="/service/documentaire">
                        <video autoPlay muted loop className="img" src={require('../../assets/captation_video.mp4')} />
                        <span className="tittle_link" >
                            Documentaire</span></Link>
                            <Link className="link" id="mariage" to="/service/patrimoine">
                        <video autoPlay muted loop className="img" src={require('../../assets/immobilier_video.mp4')} />
                        <span className="tittle_link" >
                            Patrimoine</span ></Link>
                    
                </nav>
            </div>
        </div>
        </ServicesStyle>
    )
}

export default Service