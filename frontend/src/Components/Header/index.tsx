import { Link } from "react-router-dom";
import HeaderStyle from "../../Styles/Header/HeaderStyle";



function Header(){
    return (
        <HeaderStyle>
            <div className="all">
            <img className="img" src={require('../../assets/white_logo.jpg')} alt="logo_picture" />
                <nav className="links">
                    <Link className="link" to="/">Home</Link><span> </span>
                    <Link className="link" to="/don">Don</Link><span> </span>
                    <Link className="link" to="/prestations">Prestations</Link><span> </span>
                    <Link className="link" to="/evenements">Evenements</Link><span> </span>
                    <Link className="link" to="/service">Service</Link><span> </span>
                    <Link className="link" to="/contact">Contact</Link>
                </nav>
                </div>
        </HeaderStyle>
        
    )
}

export default Header