import { useContext } from "react"
import { LangueContext } from "../../App"

function Confiance(){
    const {langue} = useContext(LangueContext)

return(

    <div>
        <div id="confiance">
            {langue === 'fr' ?
                <h2 id="sous_titre_parlent">Ils nous ont fait <span className="red">Confiance </span>🤝</h2>
            :
                <h2 id="sous_titre_parlent">They<span className="red"> Trusted </span> us 🤝</h2>
            }
            <p id="para_logo">
                    <img id="progres" className="logo" alt="logo" src={require('../../assets/Confiance/exco.png')}/>
                <span> </span>
                    <img id="france_bleue" className="logo" alt="logo"  src={require('../../assets/Confiance/fnac.jpg')}/>
                <span> </span>
                    <img id="essor" className="logo" alt="logo" src={require('../../assets/Confiance/roanne_bf.jpg')}/>
            </p>
        </div>
    </div>
)
}

export default Confiance