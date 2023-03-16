import React, { useState } from "react";
import Footer from "../../Components/Footer";
import RealPersostyle from "../../Styles/RealPerso/RealPersostyle";
import YoutubeEmbed from "../../Components/RealPerso/YoutubeEmbed";

function RealPerso(){
    let play = 0;
    const [width, setWidth] = useState('300px')

    const handleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
        if (play === 0)
        {   
            e.currentTarget.play();
            play = 1;
            console.log(e.currentTarget.play())
        } else {
            e.currentTarget.load();
            play = 0;
            console.log(e.currentTarget.pause())
        }
    }

    return (
        <RealPersostyle>
        <div id="realperso">
            <p id="txt">
            <span className="trait_horizontal_top" />
            <span className="trait_vertical_top" />
            Nous avons forgé notre expérience au fur et à mesure de nos réalisations avec la même ligne de conduite : mettre 
            en lumière des projets philanthropiques, être au coeur de l'actualité ou bien suivre des gens extraordinaires tout 
            en gardant une touche de non-conformisme.<br />Passionnés par l'humain, l'écologie, la politique ou encore les 
            enjeux sociétaux, nous voulons mettre en images ce qui nous anime tous les jours. 
            Alors qu'est que vous attendez pour embarquer dans cette aventure avec nous ?
            <span className="trait_horizontal_bot"   ></span>
            <span className="trait_vertical_bot" />
            </p>            
        </div>
        <div id="cate">
            <p>
                <h2 className="titre_cate">Nos dernières réalisations : </h2>
                <video loop className="video" onClick={handleOnMouseOut} poster="https://imghost.io/images/2017/07/01/transparent.png" src={require('../../assets/salon_agri_presentation.mp4')} />
                <video  loop className="video" onClick={handleOnMouseOut} poster="https://imghost.io/images/2017/07/01/transparent.png" src={require('../../assets/galerien.mp4')} />  
            </p>
            <p>
                <h2 className="titre_cate">Évènementiels :</h2>
                <video loop className="video" onClick={handleOnMouseOut} style={{width: width}}poster="https://imghost.io/images/2017/07/01/transparent.png" src={require('../../assets/salon_agri_presentation.mp4')} />
            </p>
        </div>
        </RealPersostyle>
    )
}

export default RealPerso