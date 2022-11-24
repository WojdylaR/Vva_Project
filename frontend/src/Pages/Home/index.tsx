import React from "react";
import Footer from "../../Components/Footer";
import HomeStyle from "../../Styles/Home/HomeStyle";

function Home(){
    return (
        <HomeStyle>
            <div>
                <p className="first">
                    <span className="first_para"><span className="red">Créateurs</span> d'images,<br /> développeurs d'idées.</span>
                    <img className="first_img" src={require('../../assets/cam.jpg')} alt="camp_img"/>
                </p>
                <p className="second">
                    <span className="second_para">Vous avez un <br />projet de film ?<br /><span className="second_phrase"><span className="red">Rejoingnez</span>-nous.</span></span>
                    <img className="second_img" src={require('../../assets/cam.jpg')} alt="camp_img"/>
                </p>
            </div>

        </HomeStyle>
        
    )
}

export default Home