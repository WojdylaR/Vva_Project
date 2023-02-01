import ServicesStylePage from "../../Styles/Services/ServiceStylePage"

function Documentaire() {
    return(
        <ServicesStylePage>
        <div>
            <p className="picture_left">
                <img className="picture" src={require('../../assets/documentaire1.jpg')} alt="mariage" />
                <img className="picture" src={require('../../assets/documentaire2.jpg')} alt="mariage" />
                <img className="picture" src={require('../../assets/documentaire3.jpg')} alt="mariage" />
            </p>
            <p id="documentaire_txt" className="txt_right">
            Si nous proposons principalement à l'heure actuelle des réalisations personnelles de notre propres 
            documentaires, nous sommes à l'écoute et prêts à vous aider dans l'un de vos projets !<br />
            Nous pouvons également vous proposer des vidéos sur-mesures de vos vacances de rêve pour 
            garder des souvenirs inoubliables !
            </p>
        </div>
        </ServicesStylePage>
    )
}

export default Documentaire