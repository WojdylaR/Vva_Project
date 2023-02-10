import React from "react";
import Footer from "../../Components/Footer";
import RealPersostyle from "../../Styles/RealPerso/RealPersostyle";
import YoutubeEmbed from "../../Components/RealPerso/YoutubeEmbed";

function RealPerso(){

    interface VideoInfo{
        url: string;
        width: number;
    }

    const video1:VideoInfo = {
        url:"xMgrlOwA0II",
        width: 857,
    }

    const video2:VideoInfo = {
        url:"ldtu-tBBwNw",
        width: 857  ,
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
            <p id="video">
                <span id="video1"><YoutubeEmbed id="video1" url={video1.url} width={video1.width}/></span>
                <span id="video2"><YoutubeEmbed url={video2.url} width={video2.width}/></span>
            </p>
            
        </div>
        </RealPersostyle>
    )
}

export default RealPerso