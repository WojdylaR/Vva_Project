import { Link, useLocation } from "react-router-dom";
import HeaderStyle from "../../Styles/Header/HeaderStyle";
import SocialLogo from "./socialLogo";


function Header(){
const location = useLocation();
{console.log("location = " + location.pathname)}
    return (
        <HeaderStyle loca={location.pathname}>
            <div className="all">
            <Link className="link_logo" id="Home"to="/"><img id="logo" src={require('../../assets/logo/logo_vva_blanc.png')} alt="logo_vva_blanc" /></Link>
                <nav className="links">
                    <h2><Link className="link" id="Home"to="/">Home</Link><span> </span>
                    <Link className="link" id="Service" to="/service">Services</Link><span> </span>
                    <Link className="link" id="RealPerso" to="/realperso">Real</Link><span> </span>
                    <Link className="link" id="Dons" to="/don">Dons</Link><span> </span>
                    <Link className="link" id="Contact" to="/contact">Contact</Link></h2>
                </nav>
                <SocialLogo />
                
            </div>
            
        </HeaderStyle>
    )
}

export default Header