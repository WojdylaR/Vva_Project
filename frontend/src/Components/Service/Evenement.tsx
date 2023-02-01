import ServicesStylePage from "../../Styles/Services/ServiceStylePage"

function Evenement () {
    return(
        <ServicesStylePage>
        <div>
            <p className="picture_left">
                <img className="picture" src={require('../../assets/evenement1.jpg')} alt="mariage" />
                <img className="picture" src={require('../../assets/evenement2.jpg')} alt="mariage" />
                <img className="picture" src={require('../../assets/evenement3.jpg')} alt="mariage" />
            </p>
            <p id="evenement_txt" className="txt_right">
            Comme vous l'aurez sûrement compris, nous sommes multi-tâches et surtout motivés 
            à vous aider à garder en mémoires des souvenirs marquants! Professionnels, 
            particuliers ou encore bénévoles dans le milieu associatif, nous serons là pour 
            vos anniversaires, salons, concerts, festivals ou même évènements sportifs !<br />             Enfin, si vous débutez dans la musique et voulez mettre en images votre talent, 
             nous proposons aussi d'assurer la réalisation de vos clips musicaux!
            </p>
        </div>
        </ServicesStylePage>
    )
}

export default Evenement