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
            Va Voir Ailleurs a un peu plus d'un an maintenant, de <span className="red">nombreuses</span> vidéos  ont déjà vu le 
            jour: reportages, court-métrages, vidéos humoristiques, publicités et bien d'autres encore... 
            Nous nous essayons encore à <span className="red">plusieurs</span> formats afin de trouver notre "scope" de réalisation. 
            Nous avons forgé notre <span className="red">expérience</span> au fur et à mesure de nos réalisations avec la même ligne de 
            conduite : mettre en lumière des projets philanthropiques, être au coeur de l'actualité ou 
            bien suivre des gens extraordinaires tout en gardant une touche de <span className="red">non-conformisme</span>. En 
            parallèle de nos prestations de vidéos pour autrui, nous proposons nos <span className="red">réalisations</span> ( que vous pouvez 
            suivre sur nos réseaux). Passionnés par l'humain, l'écologie, la politique ou encore les enjeux 
            sociétaux, nous voulons mettre en <span className="red">lumière</span> ce qui nous anime tous les jours.  Notre marque de fabrique? 
            Notre <span className="red">humour</span>, certains seront hermétiques d'autres sympatisants, tout dépend si vous 
            aimez le conformisme ou non. Personnellement on a déjà choisi notre camp et nous ne sommes 
            pas prêts de changer. Alors qu'est que vous attendez pour embarquer dans cette <span className="red">aventure</span> avec nous ?
            </p>            
        </div>
        <div id="cate">
            <p>
                <h2 className="titre_cate">- Nos dernières réalisations : </h2>
                <video loop className="video" onClick={handleOnMouseOut} poster="https://imghost.io/images/2017/07/01/transparent.png" src={require('../../assets/salon_agri_presentation.mp4')} />
                <video  loop className="video" onClick={handleOnMouseOut} poster="https://imghost.io/images/2017/07/01/transparent.png" src={require('../../assets/galerien.mp4')} />  
            </p>
            <p>
                <h2 className="titre_cate">- Évènementiels :</h2>
                <video loop className="video" onClick={handleOnMouseOut} style={{width: width}}poster="https://imghost.io/images/2017/07/01/transparent.png" src={require('../../assets/salon_agri_presentation.mp4')} />
            </p>
        </div>
        </RealPersostyle>
    )
}

export default RealPerso