import { Link } from "react-router-dom"

function MenuNav(props: any){
    return (
        <div className="menunav">
                <nav className="links">
                    <h2><Link onClick={() => props.PropUseIsOpen(1)} className="link" id="Home"to="/">Home</Link><br/>
                    <Link onClick={() => props.PropUseIsOpen(1)} className="link" id="Service" to="/service">Services</Link><br/>
                    <Link onClick={() => props.PropUseIsOpen(1)} className="link" id="RealPerso" to="/realperso">Real</Link><br/>
                    <Link onClick={() => props.PropUseIsOpen(1)} className="link" id="Dons" to="/don">Dons</Link><br/>
                    <Link onClick={() => props.PropUseIsOpen(1)} className="link" id="Contact" to="/contact">Contact</Link></h2>
                </nav>
        </div>
    )
}

export default MenuNav