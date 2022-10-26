import React from "react";
import HomeStyle from "../../Styles/Home/HomeStyle";

function Home(){
    return (
        <HomeStyle>
            <div>
                <p className="first">
                    <span className="first_para">Créateurs d'images, développeurs d'idées.</span>
                    <img className="first_img" src={require('../../assets/pont.jpg')} alt="pont_img"/>
                </p>
            </div>
        </HomeStyle>
    )
}

export default Home