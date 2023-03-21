import { Link } from "react-router-dom";
import FooterStyle from "../../Styles/Footer/FooterStyle";

function Footer(){
    return(
    <FooterStyle>
        <div className="footer">
            <div className="grille">
                <div className="grid-item">
                    <span className="txt_reseau">
                        <h2>Nous suivre: </h2>
                        <a className="logo" href="https://www.facebook.com/VaVoirAilleursExcursion/?ref=bookmarks"><img className="logo_soc" id="logo_fb" src={require('../../assets/logo/logo_fb.png')} alt="logo_fb" /></a>
                        <a className="logo" href="https://www.youtube.com/channel/UCmagj97a6B0ocvQQzsMqHFQ"><img className="logo_soc" id="logo_tictok" src={require('../../assets/logo/logo_tictok.png')} alt="logo_tiktok" /></a>
                        <a className="logo" href="https://www.instagram.com/va_voir_ailleurs__/?hl=fr"><img className="logo_soc" id="logo_yt" src={require('../../assets/logo/logo_instagram.png')} alt="logo_instagram" /></a> <br />
                        <a className="logo" href="https://www.linkedin.com/company/va-voir-ailleurs/"><img className="logo_soc" id="logo_instagram" src={require('../../assets/logo/logo_linkedin.png')} alt="logo_linkedin" /></a>
                        <a className="logo" href="https://www.youtube.com/channel/UCmagj97a6B0ocvQQzsMqHFQ"><img className="logo_soc" id="logo_linkedin" src={require('../../assets/logo/logo_yt.png')} alt="logo_yt" /></a>
                    </span>
                </div>
                <div className="grid-item">
                    <span className="txt_contact">
                        <span className="p1">
                        <h2 id="sous_titre">Un projet ? On en discute ? 🙂</h2>
                        
                        <button ><Link className="link" id="Contact"to="/contact">Contact</Link></button><br/></span>
                        <span className="p2">Pierre: +33618995138 Félix: +33625581625 <br/><span className="mail"><img className="mail_logo"  src={require('../../assets/logo/mail.png')} alt="mail_logo" />: vvaprod@hotmail.com</span></span>
                    </span>
                </div>
                <div className="grid-item">
                    <span className="txt_nav">
                        <h2>Navigation:</h2>
                        <nav className="links">
                            <Link className="link" id="Home"to="/">- Home</Link><br />
                            <Link className="link" id="Service" to="/service">- Services</Link><br />
                            <Link className="link" id="RealPerso" to="/realperso">- Real</Link><br />
                            <Link className="link" id="Dons" to="/don">- Dons</Link>
                            
                        </nav>
                    </span>
                </div>
                <span className="txt_logo">
                            <img id="logo_video" src={require('../../assets/logo/logo_vva_cam.png')} alt="logo_vva_blanc" />
                    </span>
            </div>
        </div>
        <p className="ronan">Va voir ailleurs © 2023 Tous droits réservés | Mentions Légales et politique de confidentialité | Site réalisé par <a className="rw" href="https://www.linkedin.com/in/ronan-wojdyla-07aa3920a/">Ronan Wojdyla</a></p>   
        </FooterStyle>
    )
}

export default Footer