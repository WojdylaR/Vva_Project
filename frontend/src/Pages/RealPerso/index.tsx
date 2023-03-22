import React, { useState } from "react";
import RealPersostyle from "../../Styles/RealPerso/RealPersostyle";

function RealPerso(){
    let play = 0;
    const [width, setWidth] = useState('300px')

    const handleOnClick = (e: React.MouseEvent<HTMLVideoElement>) => {
        
    }



    const handleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
        e.currentTarget.load();
            console.log(e.currentTarget.pause())

      };

      const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) => {
        console.log("yo")
        e.currentTarget.play();

      };

    return (
        <RealPersostyle>
        <div id="realperso"><h1 className="tittle_contact"><span className="red2">NOS</span> REALISATIONS</h1>
            <p id="txt">
            <span className="trait_horizontal_top" />
            <span className="trait_vertical_top" />
            Nous avons forgé notre <span className="red"> expérience</span> 🎮 au fur et à mesure de nos <span className="red">réalisations</span> avec la même ligne de conduite : mettre 
            en lumière des projets <span className="red">philanthropiques</span> 🙏, être au coeur de l'actualité 📰 ou bien suivre des gens <span className="red">extraordinaires</span> tout 
            en gardant une touche de <span className="red">non-conformisme</span>.<br />Passionnés par l'humain 👨‍👦, l'écologie 🌳, la politique ou encore les 
            enjeux <span className="red">sociétaux</span>, nous voulons mettre en images ce qui nous anime tous les jours. 
            Alors qu'est que vous attendez pour embarquer dans cette <span className="red">aventure</span> avec nous ?
            <span className="trait_horizontal_bot"   ></span>
            <span className="trait_vertical_bot" />
            </p>            
        </div>
        <div id="cate">
            <p>
                <h2 className="titre_cate">Nos dernières réalisations : </h2>
                <a href="https://www.youtube.com/watch?v=Bq8t6pl0nCw"><video loop muted className="video" onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} poster={require('./../../assets/real_perso/salon_a.jpeg')} src={require('../../assets/real_perso/salon_a.mp4')} /></a>
                <a href="https://www.youtube.com/watch?v=nbwPETO47pU"><video loop muted className="video" onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} poster={require('./../../assets/real_perso/teaser_sa.jpg')} src={require('../../assets/real_perso/salon_agri_presentation.mp4')} /></a>
                <a href="https://www.youtube.com/watch?v=ldtu-tBBwNw"><video  loop muted className="video" onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} poster={require('./../../assets/real_perso/galerien.jpg')} src={require('../../assets/real_perso/galerien.mp4')} /></a>
                <a href="https://www.youtube.com/watch?v=xMgrlOwA0II"><video loop muted className="video" onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} poster={require('./../../assets/real_perso/tipee.jpg')} src={require('../../assets/real_perso/tipee.mp4')} /></a>
            </p>
            <p>
                <h2 className="titre_cate">Humanitaire : </h2>
                <a href="https://www.youtube.com/watch?v=F9v01PQnVdM"><video loop muted className="video" onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} poster={require('./../../assets/real_perso/humanitaire/accueil_humanitaire.jpeg')} src={require('../../assets/real_perso/humanitaire/accueil_humanitaire.mp4')} /></a>
                <a href="https://www.youtube.com/watch?v=ZGqs8IuTDqo"><video loop muted className="video" onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} poster={require('./../../assets/real_perso/humanitaire/alphabetisation.jpeg')} src={require('../../assets/real_perso/humanitaire/alphabetisation.mp4')} /></a>
                <a href="https://www.youtube.com/watch?v=YmEIcYC4bm4"><video loop muted className="video" onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} poster={require('./../../assets/real_perso/humanitaire/soin_pt.jpeg')} src={require('../../assets/real_perso/humanitaire/soin_pt.mp4')} /></a>
                <a href="https://www.youtube.com/watch?v=xivbH531Fjg"><video loop muted className="video" onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} poster={require('./../../assets/real_perso/humanitaire/aides_scolaire.jpeg')} src={require('../../assets/real_perso/humanitaire/aides_scolaire.mp4')} /></a>
            </p>
            <p>
                <h2 className="titre_cate">Évènementiel :</h2>
                <a href="https://www.youtube.com/watch?v=Bq8t6pl0nCw"><video loop muted className="video" onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} poster={require('./../../assets/real_perso/salon_a.jpeg')} src={require('../../assets/real_perso/salon_a.mp4')} /></a>
                <a href="https://www.youtube.com/watch?v=nbwPETO47pU"><video loop muted className="video" onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} poster={require('./../../assets/real_perso/teaser_sa.jpg')} src={require('../../assets/real_perso/salon_agri_presentation.mp4')} /></a>
            </p>
            <p>
                <h2 className="titre_cate">Interview : </h2>
                <a href="https://www.youtube.com/watch?v=1SALvg9SDbY"><video loop muted className="video" onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} poster={require('./../../assets/real_perso/interview/interview_samuel.jpg')} src={require('../../assets/real_perso/interview/interview_samuel.mp4')} /></a>
                <a href="https://www.youtube.com/watch?v=P3cZJm5k4DI"><video loop muted className="video" onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver} poster={require('./../../assets/real_perso/interview/interview_anais.jpeg')} src={require('../../assets/real_perso/interview/interview_anais.mp4')} /></a>
            </p>
        </div>
        </RealPersostyle>
    )
}

export default RealPerso