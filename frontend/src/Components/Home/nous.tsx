import { useContext } from "react"
import HomeStyle from "../../Styles/Home/HomeStyle"
import { Link } from "react-router-dom"
import { LangueContext } from "../../App"

function Nous() {

    const {langue} = useContext(LangueContext)
    
    return(
        <HomeStyle>
            {langue == 'fr' ?
            <div id="nous">
                <h2>“Va Voir Ailleurs” <span className="red">QUEZACO</span> ? 🎥</h2>
                <p className="txt_nous">
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
                
            </div> :
            <div id="nous">
            <h2>“Va Voir Ailleurs” <span className="red">WHAT IS IT</span>? 🎥</h2>
            <p className="txt_nous">
                <span className="trait_horizontal_top" />
                <span className="trait_vertical_top" />
                📈 Initially an association <span className="red">creating </span>humanitarian projects in the form 
                of videos and creator of audiovisual content oriented towards travel, culture, 
                and geopolitics, “Va Voir Ailleurs” is a <span className="red">collective</span> of filmmakers focused on issues of 
                ecological transition as well as the associative sector.<br/><br/>
        
                🔗 You can find all of our <span className="red">works</span> on our <a className="lien" href="https://www.youtube.com/channel/UCmagj97a6B0ocvQQzsMqHFQ"><span className="red">Youtube</span></a> channel. 
                These works are 100% self-financed by our contributors <a className="lien" href="https://fr.tipeee.com/va-voir-ailleurs"><span className="red">Tipeee</span></a> and ourselves.<br /><br/>
        
                📚 Now, <span className="red">"Va Voir Ailleurs"</span> offers its services as videographers. From 
                writing the <span className="red">script</span> to setting up the <span className="red">shoot</span> to assisting 
                with dissemination, we discuss THE video that will enhance your 
                <span className="red">visibility</span>, set you apart from the <span className="red">competition</span>, and offer you new <span className="red">opportunities</span>!<br/><br/>
        
                🎶 From videos to showcase a new product to the most elaborate <span className="red">music</span> 
                video to full-fledged <span className="red">fiction</span>, the Collective does not limit 
                itself to a single field of action. <br/><br/>
        
                ⏳ So, what are you waiting for to contact us?
                <span className="trait_horizontal_bot"></span>
                <span className="trait_vertical_bot" />
            </p>
        </div>}
            { langue == 'fr' ?
            <p className="but">
                <Link className="link" id="Contact" to="/contact">
                <button>
                    <b>Rejoignez-nous!</b>
                </button></Link></p>
                :
                <p className="but">
                <Link className="link" id="Contact" to="/contact">
                <button>
                    <b>Join us !</b>
                </button></Link></p>}
        </HomeStyle> 

    )
}

export default Nous