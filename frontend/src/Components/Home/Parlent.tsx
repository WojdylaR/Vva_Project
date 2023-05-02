function Parlent(){
    return (
        <div id="parlent">
            <h2 id="sous_titre_parlent">Ils parlent de <span className="red">Nous </span>🎙</h2>
            <p id="para_logo">
                <a href="https://www.leprogres.fr/economie/2021/09/07/va-voir-ailleurs-site-e-commerce-social-et-solidaire-se-lance">
                    <img id="progres" className="logo" alt="logo" src={require('../../assets/parlent/progres.png.webp')}/>
                </a><span> </span>
                <a href="https://www.francebleu.fr/emissions/france-bleu-saint-etienne-loire-s-engage/saint-etienne-loire/france-bleu-saint-etienne-loire-s-engage-4">
                    <img id="france_bleue" className="logo" alt="logo"  src={require('../../assets/parlent/1200px-France_Bleu_logo_2015_svg.png.webp')}/>
                </a><span> </span>
                <a href="https://www.lessor42.fr/va-voir-ailleurs-pour-acheter-autrement-27369.html">
                    <img id="essor" className="logo" alt="logo" src={require('../../assets/parlent/essor.jpg.webp')}/>
                </a><span> </span>
                <a href="https://www.le-pays.fr/roanne-42300/actualites/un-jeune-globe-trotteur-qui-ne-manque-pas-didees_14008742/">
                    <img id="pays" className="logo" alt="logo" src={require('../../assets/parlent/le_pays.png.webp')}/>
                </a><br />
                <a href="https://lincontournable-roanne.fr/actualites/va-voir-ailleurs-la-boutique-de-t-shirts-ethiques-et-responsables/">
                    <img id="incontournable" className="logo" alt="logo" src={require('../../assets/parlent/incontournable_roanne.png.webp')}/>
                </a><span> </span>
                <a href="https://france3-regions.francetvinfo.fr/auvergne-rhone-alpes/rhone/guerre-en-ukraine-a-5-heures-du-matin-j-ai-ete-reveille-par-des-bombardements-le-roannais-felix-galichon-etait-sur-place-il-temoigne-du-chaos-2479792.html">
                    <img id="france3" className="logo" alt="logo" src={require('../../assets/parlent/france3_ARA.png.webp')}/>
                </a><span> </span>
                <a href="https://www.allolaplanete.fr/podcast/j-peux-pas-jai-projet/?fbclid=IwAR2ZBHt0rmFoR6O-7z-ju2IwCaY9vYadkJK6NsbsH-vSNNhT82j7eFWA9BM">
                    <img id="allo_la_planete" className="logo" alt="logo" src={require('../../assets/parlent/allo_la_planete.jpg.webp')}/>
                </a><span> </span>
                <a href="https://francaisdanslemonde.fr/episode/felix-parcours-le-monde-en-voulant-devenir-journaliste-dinvestigation/">
                    <img id="stereo" className="logo" alt="logo" src={require('../../assets/parlent/stereo_chic.png.webp')}/>
                </a>
            </p>
        </div>
    )
}

export default Parlent