import React from "react";
import Footer from "../../Components/Footer";
import HomeStyle from "../../Styles/Home/HomeStyle";

function Home(){
    return (
        <HomeStyle>
            <div id="all">
            <p>
            <h1 id="txt_video"><span className="">Va</span> Voir<br/>Ailleurs</h1>    
                    <video autoPlay muted loop id="video" src={require('../../assets/background_video.mp4')} />
                    
            </p>
                <p className="first">
                    <span className="first_para"><span className="red">Créateurs</span> d'images,<br /> développeurs d'idées.</span>

                </p>
                <p className="second">
                    <span className="second_para">Vous avez un <br />projet de film ?<br /><span className="second_phrase"><span className="red">Rejoingnez</span>-nous.</span></span>

                </p>
            </div>

        </HomeStyle>
        
    )
}

export default Home