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
        width: 857,
    }

    return (
        <RealPersostyle>
        <div id="realperso">
            <p id="video">
                <span id="video1"><YoutubeEmbed id="video1" url={video1.url} width={video1.width}/></span>
                <span id="video2"><YoutubeEmbed url={video2.url} width={video2.width}/></span>
            </p>
            <p id="txt">
            Pour la page réalisations: Alors que Va Voir Ailleurs a un peu plus d'un an maintenant, de nombreuses vidéos en tous genres ont déjà vu le jour: reportages, court-métrages, vidéos humoristiques, publicités et bien d'autres encore... 
Ce qu'il faut savoir, c'est que nous sommes  deux jeunes passionnés autodidactes. Nous avons forgé notre expérience au fur et à mesure de nos réalisations avec la plupart du temps du matériel de basse qualité mais toujours avec la même ligne de conduite, faire rentrer les gens dans notre univers tout en gardant ce même non-conformisme. 

À contrario donc de la plupart des vidéastes à l'heure actuelle, nous ne cachons pas que filmer pour autrui nous plaît mais que nous préférons bien évidemment prendre en charge et échafauder un projet de A à Z. 
Passionnés par l'humain, l'écologie, la politique ou encore les enjeux sociétaux, nous voulons mettre en lumière ce qui nous anime tous les jours. Fort de plusieurs voyages à travers le monde, nous aimons être au coeur des sujets d'actualités et étant avides de savoir, nous nous intéressons à tous types de sujets. Notre marque de fabrique? Notre humour, certains seront hermétiques d'autres sympatisants, tout dépend si vous aimez le conformisme ou non. Personnellement on a déjà choisi notre camp et nous ne sommes pas prêts de changer. 
Alors qu'est que vous attendez pour embarquer dans cette folle aventure avec nous ?
            </p>
        </div>
        </RealPersostyle>
    )
}

export default RealPerso