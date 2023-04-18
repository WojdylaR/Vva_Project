import { Link } from "react-router-dom"

function MenuNav(){
    return (
        <div className="menunav">
                <nav className="links">
                    <h2><Link className="link" id="Home"to="/">Home</Link><br/>
                    <Link className="link" id="Service" to="/service">Services</Link><br/>
                    <Link className="link" id="RealPerso" to="/realperso">Real</Link><br/>
                    <Link className="link" id="Dons" to="/don">Dons</Link><br/>
                    <Link className="link" id="Contact" to="/contact">Contact</Link></h2>
                </nav>
        </div>
    )
}

export default MenuNav