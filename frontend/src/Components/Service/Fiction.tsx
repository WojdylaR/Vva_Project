import ServicesStylePage from "../../Styles/Services/ServiceStylePage"

function Fiction() {
    return (
        <ServicesStylePage>
        <div>
            <p className="picture_left">
                <img className="picture" src={require('../../assets/fiction1.jpg')} alt="mariage" />
                <img className="picture" src={require('../../assets/fiction2.jpg')} alt="mariage" />
                <img className="picture" src={require('../../assets/fiction3.jpg')} alt="mariage" />
            </p>
            <p id="fiction_txt" className="txt_right">
            Avec des membres reconnus pour leur polyvalence et leur capacité à s'adapter en toutes 
            circonstances, nous vous proposons de vous accompagner dans la réalisation de vos 
            fictions ou court-métrages en tous genres: de la régie au son en passant par la lumière 
            en allant même jusqu'à l'écriture ou la propositions d'idées, nous sommes votre solution !
            </p>
        </div>
        </ServicesStylePage>
    )
}

export default Fiction