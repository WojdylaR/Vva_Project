function SocialLogo() {
    return (
        <span id="logo_social">
            <img className="logo_soc" id="logo_fb" src={require('../../assets/logo_fb.png')} alt="logo_fb" />
            <img className="logo_soc" id="logo_yt" src={require('../../assets/logo_yt.png')} alt="logo_yt" />
            <img className="logo_soc" id="logo_instagram" src={require('../../assets/logo_instagram.png')} alt="logo_instagram" />
            <img className="logo_soc" id="logo_linkedin" src={require('../../assets/logo_linkedin.png')} alt="logo_linkedin" />
        </span>
    )
}

export default SocialLogo