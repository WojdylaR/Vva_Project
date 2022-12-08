import React from "react";
import Footer from "../../Components/Footer";
import ServicesStyle from "../../Styles/Services/ServicesStyle";
import {Link} from "react-router-dom"






function Service(){
    const handleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
        console.log("yo")
        e.currentTarget.pause();

      };

      const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) => {
        console.log("yo")
        e.currentTarget.play();
        
      };

    return (
        <ServicesStyle>
        <div id="all">
            <h2 id="tittle"><span className="red">Nos</span> préstations</h2>
            <div id="menu">
                <nav>
                    <Link className="link" id="mariage" to="/service/mariage">
                        <video onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} muted loop  className="img" src={require('../../assets/mariage_video.mp4')} />
                        <span className="tittle_link" >
                            Mariage</span> </Link>
                    <Link className="link" id="mariage" to="/service/mariage">
                        <video  onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} className="img" muted loop  src={require('../../assets/corporate_video.mp4')} />
                        <span className="tittle_link" >
                            Corporate</span> </Link>
                    <Link className="link" id="mariage" to="/service/mariage">
                        <video onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} muted loop className="img" src={require('../../assets/evenement_video.mp4')} />
                        <span className="tittle_link" >
                            Evenement</span> </Link>
                            <Link className="link" id="mariage" to="/service/mariage">
                        <video onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} loop className="img" src={require('../../assets/fiction_video.mp4')} />
                        <span className="tittle_link" >
                            Fiction</span> </Link>
                            <Link className="link" id="mariage" to="/service/mariage">
                        <video onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} muted loop className="img" src={require('../../assets/immobilier_video.mp4')} />
                        <span className="tittle_link" >
                            Immobilier</span> </Link>
                            <Link className="link" id="mariage" to="/service/mariage">
                        <video onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} loop className="img" src={require('../../assets/captation_video.mp4')} />
                        <span className="tittle_link" >
                            Captation</span> </Link>
                    
                </nav>
            </div>
        </div>
        </ServicesStyle>
    )
}

export default Service