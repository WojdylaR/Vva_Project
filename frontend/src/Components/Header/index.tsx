import { Link, useLocation } from "react-router-dom";
import HeaderStyle from "../../Styles/Header/HeaderStyle";
import ReseauSocio from "../Footer/reseau_socio";

function Header(){
const location = useLocation();
{console.log("location = " + location.pathname)}
    return (
        <HeaderStyle loca={location.pathname}>
            <div className="all">
            <img id="logo" src={require('../../assets/logo_vva_blanc.png')} alt="logo_vva_blanc" />
                <nav className="links">
                    
                    <Link className="link" id="Home"to="/">Home</Link><span> </span>
                    <Link className="link" id="Service" to="/service">Services</Link><span> </span>
                    <Link className="link" id="RealPerso" to="/realperso">Real</Link><span> </span>
                    <Link className="link" id="Dons" to="/don">Dons</Link><span> </span> 
                </nav>
            </div>
            
        </HeaderStyle>
    )
}

export default Header