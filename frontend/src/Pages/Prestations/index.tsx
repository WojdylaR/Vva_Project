import React from "react";
import PresentationStyle from "../../Styles/Presentations/PresentationStyle";

function Prestations(){
    return (
        <PresentationStyle>
            <div>
                <img className="img1" src={require('../../assets/pont.jpg')} alt="pont_img"/>
        </div>
        </PresentationStyle>
    )
}

export default Prestations