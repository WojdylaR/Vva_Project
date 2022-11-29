import { Link, useLocation } from "react-router-dom";
import HeaderStyle from "../../Styles/Header/HeaderStyle";

function Header(){
const location = useLocation();
{console.log("location = " + location.pathname)}
    return (
        <HeaderStyle loca={location.pathname}>
            <div className="all">
            <img className="img" src={require('../../assets/white_logo.jpg')} alt="logo_picture" />
                <nav className="links">
                    <Link className="link" id="Home"to="/">Home</Link><span> </span>
                    <Link className="link" id="Presentation" to="/presentation">L'équipe</Link><span> </span>
                    <Link className="link" id="Evenements" to="/evenements">Evenements</Link><span> </span>
                    <Link className="link" id="Service" to="/service">Services</Link><span> </span>
                    <Link className="link" id="Dons" to="/don">Dons</Link><span> </span>
                   
                </nav>
            </div>
            
        </HeaderStyle>
    )
}

export default Header