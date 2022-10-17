import { Link } from "react-router-dom";
import HeaderStyle from "../../Styles/Header/HeaderStyle";



function Header(){
    return (
        <HeaderStyle>
            <div className="toto">
                <nav>
                    <ul id="cemenu">
                        <li className="toto"><Link to="/">Home </Link></li>
                        <li id="line"><Link to="/don">Don </Link></li>
                        <li id="line"><Link to="/prestations">Prestations </Link></li>
                        <li id="line"> <Link to="/evenements">Evenements </Link></li>
                        <li id="line"> <Link to="/service">Service </Link></li>
                        <li id="line"> <Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </HeaderStyle>
    )
}

export default Header