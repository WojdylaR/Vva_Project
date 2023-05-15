import AllCarousel from "../../Components/RealPerso/Caroussel";
import useWindowSize from "../../Hook/useScreenSize";
import RealPersostyle from "../../Styles/RealPerso/RealPersostyle";

function RealPerso(){
    let der_minia = ["interview/sépare.jpg","politique/manif_rupture.jpg","politique/france_gronde.jpg","mi_tr/salon_a.jpeg", "mi_tr/teaser_sa.jpg", "fiction/galerien.jpg", "interview/tipee.jpg"]
    let der_yt = ["LOOhP0kZG7s","BlPdFNBfrao","Rv0xoN4G6dg","Bq8t6pl0nCw", "nbwPETO47pU", "ldtu-tBBwNw", "xMgrlOwA0II"]

    let huma_minia = ["humanitaire/aide_ukr1.jpg","humanitaire/aide_ukr2.jpg","humanitaire/aide_ukr3.jpg","humanitaire/aides_scolaire.jpeg","humanitaire/accueil_humanitaire.jpeg",
                        "humanitaire/alphabetisation.jpeg","humanitaire/soin_pt.jpeg","humanitaire/afri_chre.jpg","humanitaire/afri_coton.jpg","humanitaire/sud_togo.jpg","humanitaire/faune_flore.jpg"];
    let huma_yt = ["CFKMlvFMKXc","i7WS9muKRRk","rflRVJJCr14","xivbH531Fjg","F9v01PQnVdM","ZGqs8IuTDqo","YmEIcYC4bm4","BnD7aovj4RY","z7eNOLklRsw","yavzUtBaw8","5Lt50qVgaWw&t"];

    let int_minia = ["interview/sépare.jpg","interview/int_exco.jpg","interview/int_fnac.jpg","interview/interview_samuel.jpg","interview/interview_anais.jpeg","interview/tipee.jpg"];
    let int_yt = ["LOOhP0kZG7s","g1CcxwGoq-g","PBOLDViFnBE","1SALvg9SDbY","P3cZJm5k4DI", "xMgrlOwA0II"];

    let mi_tr_minia = ["mi_tr/salon_a.jpeg", "mi_tr/teaser_sa.jpg"];
    let mi_tr_yt = ["Bq8t6pl0nCw", "nbwPETO47pU"];

    let poli_minia = ["politique/manif_rupture.jpg","politique/france_gronde.jpg"];
    let poli_yt = ["BlPdFNBfrao","Rv0xoN4G6dg"];

    let fic_minia = ["fiction/galerien.jpg","fiction/bref.jpg"];
    let fic_yt = ["ldtu-tBBwNw","AFUXErDaUCw"];

    let voy_minia = ["voyage/bulgarie.jpg","voyage/corse.jpg"];
    let voy_yt = ["tFv3b4bVYJk","uT-0sZDZrb8"];
    return (

        <RealPersostyle width={useWindowSize().width}>
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
                <AllCarousel nbr_vid={der_minia.length} minia={der_minia} yt={der_yt}/>
            </p>
            <p>
                <h2 className="titre_cate">Humanitaire : </h2>
                <AllCarousel nbr_vid={huma_minia.length} minia={huma_minia} yt={huma_yt}/>
            </p>
            <p>
                <h2 className="titre_cate">Interviews :</h2>
                <AllCarousel nbr_vid={int_minia.length} minia={int_minia} yt={int_yt}/>
            </p>
            <p>
                <h2 className="titre_cate">Micro Trottoir :</h2>
                <AllCarousel nbr_vid={mi_tr_minia.length} minia={mi_tr_minia} yt={mi_tr_yt}/>
            </p>
            <p>
                <h2 className="titre_cate">Politique :</h2>
                <AllCarousel nbr_vid={poli_minia.length} minia={poli_minia} yt={poli_yt}/>
            </p>
            <p>
                <h2 className="titre_cate">Fiction :</h2>
                <AllCarousel nbr_vid={fic_minia.length} minia={fic_minia} yt={fic_yt}/>
            </p>
            <p>
                <h2 className="titre_cate">Voyage :</h2>
                <AllCarousel nbr_vid={voy_minia.length} minia={voy_minia} yt={voy_yt}/>
            </p>
        </div>
        </RealPersostyle>
    )
}

export default RealPerso