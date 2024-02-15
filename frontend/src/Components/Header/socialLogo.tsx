import { useContext } from "react"
import { LangueContext } from "../../App"

function SocialLogo() {

    const {toggleLangue} = useContext(LangueContext)
    const {langue} = useContext(LangueContext)

    return (
        <span id="logo_social">
            <img onClick={langue == 'fr' ? ()=>{} :toggleLangue} style={{scale: langue =='fr' ? "1.4" : "1"}} className="logo_soc" src={require('../../assets/logo/flag_fr.png')} />
            <a target="_blank" rel="noreferrer" className="logo" href="https://www.facebook.com/VaVoirAilleursExcursion/?ref=bookmarks"><img className="logo_soc" src={require('../../assets/logo/logo_fb.png')} alt="logo_fb" /></a>
            <a target="_blank" rel="noreferrer" className="logo" href="https://www.tiktok.com/@va.voir.ailleurs_"><img className="logo_soc" src={require('../../assets/logo/logo_tictok.png')} alt="logo_tiktok" /></a>
            <a target="_blank" rel="noreferrer" className="logo" href="https://www.instagram.com/va_voir_ailleurs__/?hl=fr"><img className="logo_soc" src={require('../../assets/logo/logo_instagram.png')} alt="logo_instagram" /></a><br/>

            <img onClick={langue == 'en' ? ()=>{} :toggleLangue} style={{scale: langue =='fr' ? "1" : "1.4"}} className="logo_soc" src={require('../../assets/logo/flag_uk.png')} />
            <a target="_blank" rel="noreferrer" className="logo" href="https://www.linkedin.com/company/va-voir-ailleurs/"><img className="logo_soc" src={require('../../assets/logo/logo_linkedin.png')} alt="logo_linkedin" /></a>
            <a target="_blank" rel="noreferrer" className="logo" href="https://www.youtube.com/channel/UCmagj97a6B0ocvQQzsMqHFQ"><img className="logo_soc" src={require('../../assets/logo/logo_yt.png')} alt="logo_yt" /></a>
            <a target="_blank" rel="noreferrer" className="logo" href="https://fr.tipeee.com/va-voir-ailleurs"><img className="logo_soc"  src={require('../../assets/logo/tipee.png')} alt="logo_yt" /></a>
        </span>
    )
}

export default SocialLogo