import React from "react";
import Footer from "../../Components/Footer";
import HomeStyle from "../../Styles/Home/HomeStyle";

function Home(){
    return (
        <HomeStyle>
            <div>
                <p className="first">
                    <span className="first_para">Créateurs d'images,<br /> développeurs d'idées.</span>
                    <img className="first_img" src={require('../../assets/cine.jpg')} alt="camp_img"/>
                </p>
                <p className="second">
                    <span className="second_para">Vous avez un <br />projet de film ?<br /><span className="second_phrase">Rejoingnez-nous.</span></span>
                    <img className="second_img" src={require('../../assets/cine.jpg')} alt="camp_img"/>
                </p>
            </div>

            <Footer />
        </HomeStyle>
        
    )
}

export default Home