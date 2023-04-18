import { Link, useLocation, } from "react-router-dom";
import HeaderStyle from "../../Styles/Header/HeaderStyle";
import SocialLogo from "./socialLogo";
import useWindowSize from "../../Hook/useScreenSize";
import { useState } from "react";
import MenuNav from "./MenuNav";


function Header(){
const location = useLocation();

    const screenWidth = useWindowSize().width;
    const [isOpen, UseIsOpen] = useState(1)

    

    if( screenWidth === undefined || screenWidth <= 900){
        return (
            <HeaderStyle loca={location.pathname}>
            <div id="little_screen">
                <div  className="button_menu"><input type="checkbox" id="checkbox" />
                    <label  onClick={() => isOpen === 1 ? UseIsOpen(0) : UseIsOpen(1)} htmlFor="checkbox" className="toggle">
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                    </label>
                </div>
                <Link className="link_logo" id="Home"to="/"><img id="logo" src={require('../../assets/logo/logo_vva_blanc.png')} alt="logo_vva_blanc" /></Link>
                <SocialLogo /> 
               
               
            </div>
            {isOpen === 0 ? <MenuNav PropUseIsOpen={UseIsOpen}/> : ""}
            </HeaderStyle>
        )
    } else {
    return (
        <HeaderStyle loca={location.pathname}>
            <div id="big_screen">
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
}}

export default Header