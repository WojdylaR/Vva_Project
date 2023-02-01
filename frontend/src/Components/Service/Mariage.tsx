import ServicesStylePage from "../../Styles/Services/ServiceStylePage"

function Mariage(){
    return (
        <ServicesStylePage>
        <div>
            <p className="picture_left">
                <img className="picture" src={require('../../assets/mariage_picture1.jpg')} alt="mariage" />
                <img className="picture" src={require('../../assets/mariage_picture2.jpg')} alt="mariage" />
                <img className="picture" src={require('../../assets/mariage_picture3.jpg')} alt="mariage" />
            </p>
            <p id="mariage_txt" className="txt_right">
            Vous souhaitez garder un souvenir mémorable d'un moment qui devrait rester comme l'un des plus beaux
             de votre vie ?<br />Nous sommes là pour vous et voulons vous accompagner dans toutes les étapes de ce moment 
             magique aux côtés des êtres qui vous sont chères ... demande en mariage, préparatifs, cérémonie, 
             réceptions ... un package sur-mesure pour des prix dérisoires.. <br />Réservez-nous une coupe de champagne 
             ainsi qu'une part de gâteau et nous débarquons sur le champ !
            </p>
        </div>
        </ServicesStylePage>
    )
}

export default Mariage