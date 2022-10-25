import React from "react";
import { Link } from "react-router-dom";
import FooterStyle from "../../Styles/Footer/FooterStyle";

function Footer(){
    return(
        <FooterStyle>
            <div className="all">
                <p className="reseaux">
                    <a className="logo" href="https://www.facebook.com/VaVoirAilleursExcursion/?ref=bookmarks"><img className="img_fb" src={require('../../assets/fb_logo.png')}/> </a>
                    <a className="logo" href="https://www.instagram.com/feler__/?hl=fr"><img className="img_insta" src={require('../../assets/insta_logo.png')}/> </a>
                    <a className="logo" href="https://www.linkedin.com/company/va-voir-ailleurs/"><img className="img_linkedin" src={require('../../assets/linkedin_logo.png')}/> </a>
                    <a className="logo" href="https://www.youtube.com/channel/UCmagj97a6B0ocvQQzsMqHFQ"><img className="img_yt" src={require('../../assets/yt_logo.png')}/></a>
                </p>
            </div>
        </FooterStyle>
    )
}

export default Footer