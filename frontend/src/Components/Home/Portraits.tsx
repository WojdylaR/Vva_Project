function Portraits(){
    return (
        <div id="portraits">
            <h2 id="sous_titre_portraits" className="sous_titre">L'<span className="red">Equipe</span></h2>
            <span id="felix" className="photo_span">
                <img id="felix_photo" className="photo" src={require('../../assets/felix.jpeg')} alt="Felix" />
                <h4 id="felix_prenom" className="prenom_haut">
                    Félix
                </h4>
                <a id="linkedin_fel" className="linkedin_haut" href="https://www.linkedin.com/company/va-voir-ailleurs/"><img  src={require('../../assets/logo_linkedin.png')} alt="logo_linkedin" /></a>
                <h4 id="nom_felix" className="nom_haut">
                    Co-Fondateur
                </h4>
            </span>
            <span id="pierre">
                <img id="pierre_photo" className="photo" src={require('../../assets/pierre.jpeg')} alt="Pierre" />
                <h4 id="prenom_pierre" className="prenom_haut">
                    Pierre
                </h4>
                <a id="linkedin_pierre" className="linkedin_haut" href="https://www.linkedin.com/company/va-voir-ailleurs/"><img  src={require('../../assets/logo_linkedin.png')} alt="logo_linkedin" /></a>
                <h4 id="nom_pierre" className="nom_haut">
                    Co-Fondateur
                </h4>
            </span>
            <span id="ronan">
                <img id="ronan_photo" className="photo" src={require('../../assets/ronan.png')} alt="Ronan" />
                <h4 id="prenom_ronan" className="prenom_haut">
                    Ronan
                </h4>
                <a id="linkedin_ronan" className="linkedin_haut" href="https://www.linkedin.com/company/va-voir-ailleurs/"><img  src={require('../../assets/logo_linkedin.png')} alt="logo_linkedin" /></a>
                <h4 id="nom_ronan" className="nom_haut">
                    Développeur
                </h4>
            </span>
            <br/>
            <br/>
            <span id="sacco" className="photo_span">
                <img id="sacco_photo" className="photo" src={require('../../assets/sacco.jpeg')} alt="Sacco" />
                <h4 id="sacco_prenom" className="prenom_bas">
                    Clément
                </h4><a id="linkedin_sacco" className="linkedin_bas" href="https://www.linkedin.com/company/va-voir-ailleurs/"><img  src={require('../../assets/logo_linkedin.png')} alt="logo_linkedin" /></a>
                <h4 id="nom_sacco" className="nom_bas">
                    Graphiste
                </h4>
            </span>
            <span id="liam">
                <img id="liam_photo" className="photo" src={require('../../assets/liam.jpeg')} alt="Liam" />
                <h4 id="prenom_liam" className="prenom_bas">
                    Liam
                </h4>
                <a id="linkedin_liam" className="linkedin_bas" href="https://www.linkedin.com/company/va-voir-ailleurs/"><img  src={require('../../assets/logo_linkedin.png')} alt="logo_linkedin" /></a>
                <h4 id="nom_liam" className="nom_bas">
                    Cadreur
                </h4>
            </span>
            <span id="baz">
                <img id="baz_photo" className="photo" src={require('../../assets/baz.jpeg')} alt="Bazil" />
                <h4 id="prenom_baz" className="prenom_bas">
                    Bazil
                </h4>
                <a id="linkedin_anne_so" className="linkedin_bas" href="https://www.linkedin.com/company/va-voir-ailleurs/"><img  src={require('../../assets/logo_linkedin.png')} alt="logo_linkedin" /></a>
                <h4 id="nom_bazil" className="nom_bas">
                    PDG
                </h4>
            </span>
        </div>
    )
}

export default Portraits