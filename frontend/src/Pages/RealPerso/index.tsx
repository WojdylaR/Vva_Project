import RealPersostyle from "../../Styles/RealPerso/RealPersostyle";

function RealPerso(){
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
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=Bq8t6pl0nCw"><img alt="minia_video" src={require('../../assets/real_perso/salon_a.jpeg')} /></a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=nbwPETO47pU"><img alt="minia_video" src={require('../../assets/real_perso/teaser_sa.jpg')} /></a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ldtu-tBBwNw"><img alt="minia_video" src={require('../../assets/real_perso/galerien.jpg')} /></a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=xMgrlOwA0II"><img alt="minia_video" src={require('../../assets/real_perso/tipee.jpg')} /></a>
            </p>
            <p>
                <h2 className="titre_cate">Humanitaire : </h2>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=F9v01PQnVdM"><img alt="minia_video" src={require('../../assets/real_perso/humanitaire/accueil_humanitaire.jpeg')} /></a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ZGqs8IuTDqo"><img alt="minia_video" src={require('../../assets/real_perso/humanitaire/alphabetisation.jpeg')} /></a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=YmEIcYC4bm4"><img alt="minia_video" src={require('../../assets/real_perso/humanitaire/soin_pt.jpeg')} /></a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=xivbH531Fjg"><img alt="minia_video" src={require('../../assets/real_perso/humanitaire/aides_scolaire.jpeg')} /></a>
            </p>
            <p>
                <h2 className="titre_cate">Évènementiel :</h2>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=Bq8t6pl0nCw"><img alt="minia_video" src={require('../../assets/real_perso/salon_a.jpeg')} /></a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=nbwPETO47pU"><img alt="minia_video" src={require('../../assets/real_perso/teaser_sa.jpg')} /></a>
            </p>
            <p>
                <h2 className="titre_cate">Interviews : </h2>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=1SALvg9SDbY"><img alt="minia_video" src={require('../../assets/real_perso/interview/interview_samuel.jpg')} /></a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=P3cZJm5k4DI"><img alt="minia_video" src={require('../../assets/real_perso/interview/interview_anais.jpeg')} /></a>
            </p>
        </div>
        </RealPersostyle>
    )
}

export default RealPerso