import HomeStyle from "../../Styles/Home/HomeStyle"
import { Link } from "react-router-dom"

function Nous() {
    
    return(
        <HomeStyle>
            <div id="nous">
                <h2>“Va Voir Ailleurs” <span className="red">QUEZACO</span> ? 🎥</h2>
                <p>
                <span className="trait_horizontal_top" />
                <span className="trait_vertical_top" />
                📈 Initialement association <span className="red">réalisatrice </span>de projets humanitaires sous forme 
                de vidéos et créatrice de contenu <span className="red">audiovisuel</span> orienté voyage, culture, 
                géopolitique, “Va Voir Ailleurs” est un <span className="red">collectif</span> de réalisateurs tourné vers les questions de la 
                transition écologique ainsi que du milieu associatif.<br/><br/>

                🔗 Vous pouvez trouver l’intégralité de nos <span className="red">réalisations</span> sur notre chaîne <a className="lien" href="https://www.youtube.com/channel/UCmagj97a6B0ocvQQzsMqHFQ"><span className="red">Youtube</span></a>. 
                Ces réalisations sont auto-financées à 100% par nos contributeurs <a className="lien" href="https://fr.tipeee.com/va-voir-ailleurs"><span className="red">Tipeee</span></a> et nous-mêmes.<br /><br/>

                📚 Dorénavant, <span className="red">"Va Voir Ailleurs"</span> propose ses services de vidéastes. De 
                l’écriture du <span className="red">scénario</span> à la mise en place du <span className="red">tournage</span> jusqu’à l’aide 
                à la diffusion, nous discutons de LA vidéo qui développera votre 
                <span className="red"> notoriété</span>, vous démarquera de la <span className="red">concurrence</span> et vous offrira de nouvelles <span className="red">opportunités</span> !<br/><br/>

                🎶 De la vidéo pour mettre en avant un nouveau produit au <span className="red">clip </span>
                musical à la <span className="red">fiction</span> la plus totale, le Collectif ne se limite 
                pas à un seul et unique champ d'action. <br/><br/>

                ⏳ Alors, qu’attendez-vous pour nous contacter ?
                <span className="trait_horizontal_bot"></span>
                <span className="trait_vertical_bot" />
                </p>
                <p className="but">
                <Link className="link" id="Contact" to="/contact">
                <button>
                    <b>Rejoignez-nous!</b>
                </button></Link></p>
            </div>
        </HomeStyle>
    )
}

export default Nous