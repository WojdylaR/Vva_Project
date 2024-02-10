import { useContext } from "react"
import { LangueContext } from "../../App"

function TextPresentation(){

    const {langue} = useContext(LangueContext)

    return(
        
        <div className="TextPresentation">
            {langue == 'fr' ? 
            <div className="grille">
                <div className="grid_item">
                    
                    <h2 className="sous_titre_txt">Notre <span className="red">Image</span> ✅</h2>
                    Nous n’avons pas la notoriété des grands groupes c’est pourquoi à travers nos vidéos de qualités 
                    à prix hyper compétitif nous espérons que le bouche à oreille fonctionnera en restant nous même
                </div>
                <div className="grid_item">
                    <h2 className="sous_titre_txt">La<span className="red"> vidéo</span> au XXIeme 📸</h2>
                    Inutile de vous parler de l’importance des vidéos à notre époque si vous êtes sur ce site c’est 
                    que vous l’avez compris Etc etc etc. Va Voir Ailleurs attache une importance à tourner des vidéos 
                    de qualité à des prix hyper compétitifs.
                </div>
                <div className="grid_item">
                <h2 className="sous_titre_txt">L’<span className="red">humain</span> avant tout 🌎</h2>
                    Nous croyons à la puissance des relations, de la confiance et de la bienveillance. Nous mettons 
                    un point d'honneur à discuter avec chaque client et nous rencontrer physiquement de façon régulière.
                </div>
            </div>
            
            : 
            <div className="grille">
                <div className="grid_item">
                    <h2 className="sous_titre_txt">Our <span className="red">Image</span> ✅</h2>
                    We may not have the recognition of large corporations, which is why through our high-quality videos 
                    at highly competitive prices, we hope word of mouth will work while remaining true to ourselves.
                </div>
                <div className="grid_item">
                    <h2 className="sous_titre_txt">Video in the 21st Century 📸</h2>
                    There's no need to talk to you about the importance of videos in our time; if you're on this site, it's 
                    because you understand it, etc., etc., etc. Va Voir Ailleurs places great importance on producing high-quality 
                    videos at highly competitive prices.
                </div>
                <div className="grid_item">
                    <h2 className="sous_titre_txt">Putting <span className="red">People</span> First 🌎</h2>
                    We believe in the power of relationships, trust, and kindness. We make it a priority to talk to each client 
                    and regularly meet with them in person.
                </div>
            </div>}
        </div>
    )
}

export default TextPresentation