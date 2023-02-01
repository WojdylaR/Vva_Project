import ServicesStylePage from "../../Styles/Services/ServiceStylePage"

function Patrimoine() {
    return (
        <ServicesStylePage>
        <div>
            <p className="picture_left">
                <img className="picture" src={require('../../assets/patrimoine1.jpg')} alt="mariage" />
                <img className="picture" src={require('../../assets/patrimoine2.jpg')} alt="mariage" />
                <img className="picture" src={require('../../assets/patrimoine3.jpg')} alt="mariage" />
            </p>
            <p id="patrimoine_txt" className="txt_right">
                La diversité de nos services proposés comporte également le domaine du patrimoine!   Vous 
                souhaitez mettre en valeur un bien immobilier dans le but de le revendre par 
                la suite ?<br />
                Faire la promotion d'un village, d'un monument ou d'un artisanat local ? <br />
                Nous sommes là pour vous accompagner mettre en lumière les lieux ou objets qui vous tiennent
                     à coeur !
            </p>
        </div>
        </ServicesStylePage>
    )
}

export default Patrimoine