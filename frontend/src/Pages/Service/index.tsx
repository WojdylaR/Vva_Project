import React from "react";
import Footer from "../../Components/Footer";
import ServicesStyle from "../../Styles/Services/ServicesStyle";
import {Link} from "react-router-dom"

function Service(){
    return (
        <ServicesStyle>
        <div id="all">
            <h2 id="tittle"><span className="red">Nos</span> réalisations</h2>
            <div id="menu">
                <nav>
                    <Link className="link" id="mariage" to="/service/mariage"><img className="img" src={require('../../assets/img_mariage.png')} alt="mariage"/><span className="tittle_link" >Mariage</span> </Link>
                    <Link className="link" id="clip" to="/service/mariage"><img className="img" src={require('../../assets/img_mariage.png')} alt="mariage"/><span className="tittle_link" >Clip</span> </Link>
                    <Link className="link" id="corporate" to="/service/mariage"><img className="img" src={require('../../assets/img_mariage.png')} alt="mariage"/><span className="tittle_link" >Corporate</span> </Link>
                    <Link className="link" id="drone" to="/service/mariage"><img className="img" src={require('../../assets/img_mariage.png')} alt="mariage"/><span className="tittle_link" >Drone</span> </Link>
                    <Link className="link" id="evenement" to="/service/mariage"><img className="img" src={require('../../assets/img_mariage.png')} alt="mariage"/><span className="tittle_link" >Evenement</span> </Link>
                    <Link className="link" id="fiction" to="/service/mariage"><img className="img" src={require('../../assets/img_mariage.png')} alt="mariage"/><span className="tittle_link" >Fiction</span> </Link>
                    
                </nav>
            </div>
        </div>
        </ServicesStyle>
    )
}

export default Service