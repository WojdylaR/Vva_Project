import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { LangueContext } from "../../App"
import gsap from "gsap"

function MenuNav(props: any){

    const {langue} = useContext(LangueContext)
    return (
        <div className="menunav">
            {langue == 'fr' ?
                <nav className="links">
                    <h2><Link onClick={() => props.PropUseIsOpen(0)} className="link" id="Home"to="/">Accueil</Link><br/>
                    <Link onClick={() => props.PropUseIsOpen(0)} className="link" id="Service" to="/service">Services</Link><br/>
                    <Link onClick={() => props.PropUseIsOpen(0)} className="link" id="RealPerso" to="/realperso">Réalisation</Link><br/>
                    <Link onClick={() => props.PropUseIsOpen(0)} className="link" id="Dons" to="/don">Dons</Link><br/>
                    <Link onClick={() => props.PropUseIsOpen(0)} className="link" id="Contact" to="/contact">Contact</Link></h2>
                </nav>
                :
                <nav className="links">
                    <h2><Link onClick={() => props.PropUseIsOpen(0)} className="link" id="Home"to="/">Home</Link><br/>
                    <Link onClick={() => props.PropUseIsOpen(0)} className="link" id="Service" to="/service">Services</Link><br/>
                    <Link onClick={() => props.PropUseIsOpen(0)} className="link" id="RealPerso" to="/realperso">Real</Link><br/>
                    <Link onClick={() => props.PropUseIsOpen(0)} className="link" id="Dons" to="/don">Donation</Link><br/>
                    <Link onClick={() => props.PropUseIsOpen(0)} className="link" id="Contact" to="/contact">Contact</Link></h2>
                </nav>}
        </div>
    )
}

export default MenuNav