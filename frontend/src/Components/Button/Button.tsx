import ButtonStyle from "../../Styles/Button/ButtonStyle";
import { Link } from "react-router-dom";

function Button() {
    return(
        <ButtonStyle>
            <Link className="link" id="Contact" to="/contact">
        <div>
            <button>
                <span>Contactez-nous</span>
            </button>
        </div></Link>
        </ButtonStyle>
    )
}

export default Button