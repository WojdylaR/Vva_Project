function SocialLogo() {
    return (
        <span id="logo_social">
            <a className="logo" href="https://www.facebook.com/VaVoirAilleursExcursion/?ref=bookmarks"><img className="logo_soc" id="logo_fb" src={require('../../assets/logo_fb.png')} alt="logo_fb" /></a>
            <a className="logo" href="https://www.instagram.com/feler__/?hl=fr"><img className="logo_soc" id="logo_yt" src={require('../../assets/logo_instagram.png')} alt="logo_yt" /></a>
            <a className="logo" href="https://www.linkedin.com/company/va-voir-ailleurs/"><img className="logo_soc" id="logo_instagram" src={require('../../assets/logo_linkedin.png')} alt="logo_instagram" /></a>
            <a className="logo" href="https://www.youtube.com/channel/UCmagj97a6B0ocvQQzsMqHFQ"><img className="logo_soc" id="logo_linkedin" src={require('../../assets/logo_yt.png')} alt="logo_linkedin" /></a>
        </span>
    )
}

export default SocialLogo