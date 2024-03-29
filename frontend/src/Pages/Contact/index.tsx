import React, {useContext, useRef, useState} from "react";
import ContactStyle from "../../Styles/Contact/ContactStyle";
import emailjs from '@emailjs/browser';
import { LangueContext } from "../../App";



function Contact(){

    const {langue} = useContext(LangueContext)
    
    const formRef = useRef<HTMLFormElement>(null);

    const API_KEY= "17d7fcce8d579965da3a47743b75490f40c33e377379cdad93cdfadb7f547595"
    const sendMail = () => {
        if (formRef.current){   
         emailjs.sendForm('service_pkovtdj', 'template_jjlafi8', formRef.current , 'PL6AlK1qQm8XUi8Wh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        }
        alert("Merci à vous, Nous vous rappelons des que possible !")
        window.location.reload()
}
        


    return (
        <ContactStyle>
            {langue == 'fr' ?
            <div className="contact">
                <div className="grille">
                <div id="grid_item">
                <div className="scnd_div">
            <h2 className="scnd_tittle">Un projet ou une envie de vidéo ?</h2><p id="txt_scnd_div">
            <span className="trait_horizontal_top" />
            <span className="trait_vertical_top" />Envoyez-nous un message pour que nous 
            puissions y réfléchir brièvement avec notre équipe de production, on vous rappelle et on en discute ? 🙂<br/>
            <span className="trait_horizontal_bot"></span>
            <span className="trait_vertical_bot" /></p>
            <p className="contact_numero">
                <span className="prenom">Félix & Pierre</span><br/>
                <span className="fondateur">Co-fondateurs</span><br />
                <span className="num"><img className="logo_phone"  src={require('../../assets/logo/logo_phone.png')} alt="phone" />:<h3 className="numero1">0625581625</h3></span><span className="num"><img className="logo_phone"  src={require('../../assets/logo/logo_phone.png')} alt="phone" />:<h3 className="numero2">0618995138</h3></span>
                <br/><a className="lien_dl" href={require('./les_deux_galerien.mp4')} download={"Présentation Va Voir Ailleurs.mp4"}>Télécharger notre processus de fonctionnement</a>
            </p>
            </div>
            </div>
                    <div id="grid_item">
                <h1 className="tittle_contact"><span className="red">NOUS</span> CONTACTER</h1>
                <div className="all_input">
                        <form ref={formRef} >
                            <div id="grille_info">
                        <div className="info_item">
                            <div className="form__group field">
                                <input type="input" name='user_name' required={true} className="form__field" placeholder="Name" />
                                <label htmlFor="name" className="form__label">Nom<span className="red">*</span></label>
                            </div>
                        </div><div className="info_item">
                        <div className="form__group field">
                                <input type="input" name='user_surname' className="form__field" placeholder="Name" />
                                <label htmlFor="name" className="form__label">Prenom<span className="red">*</span></label>
                            </div>
                    </div><div className="info_item">
                    <div className="form__group field">
                                <input type="input" name='user_mail' className="form__field" placeholder="Name" />
                                <label htmlFor="name" className="form__label">Mail<span className="red">*</span></label>
                            </div>
                        </div><div className="info_item">
                        <div className="form__group field">
                                <input type="input" name='user_phone' className="form__field" placeholder="Name" />
                                <label htmlFor="name" className="form__label">Téléphone<span className="red">*</span></label>
                            </div>
                    </div><div className="info_item">
                    <div className="form__group field">
                                <input type="input" name='user_address' className="form__field" placeholder="Name" />
                                <label htmlFor="name" className="form__label">Adresse</label>
                            </div>
                        </div><div className="info_item">
                        <div className="form__group field">
                                <input type="input" name='user_entreprise' className="form__field" placeholder="Name" />
                                <label htmlFor="name" className="form__label">Entreprise</label>
                            </div>
                            </div>
                        </div>
                        
                
                <div id="txt_to_send">
            <textarea id="champTxt" name='user_message'/><br /></div></form>
            <button id="button" onClick={sendMail}>Envoyer</button><br/>
            <p className="obli"><span className="red">* champs obligatoire</span></p>
        </div>      
            </div>
            
            </div>
            </div> :
            
            <div className="contact">
    <div className="grille">
        <div id="grid_item">
            <div className="scnd_div">
                <h2 className="scnd_tittle">Got a project or a video idea?</h2>
                <p id="txt_scnd_div">
                    <span className="trait_horizontal_top" />
                    <span className="trait_vertical_top" />
                    Send us a message so we can briefly discuss it with our production team, we'll call you back and talk about it? 🙂<br/>
                    <span className="trait_horizontal_bot"></span>
                    <span className="trait_vertical_bot" />
                </p>
                <p className="contact_numero">
                    <span className="prenom">Félix & Pierre</span><br/>
                    <span className="fondateur">Co-founders</span><br />
                    <span className="num"><img className="logo_phone"  src={require('../../assets/logo/logo_phone.png')} alt="phone" />:<h3 className="numero1">0625581625</h3></span>
                    <span className="num"><img className="logo_phone"  src={require('../../assets/logo/logo_phone.png')} alt="phone" />:<h3 className="numero2">0618995138</h3></span>
                    <br/><a className="lien_dl" href={require('./les_deux_galerien.mp4')} download={"Va Voir Ailleurs Presentation.mp4"}>Download our operating process</a>
                </p>
            </div>
        </div>
        <div id="grid_item">
            <h1 className="tittle_contact"><span className="red">CONTACT</span> US</h1>
            <div className="all_input">
                <form ref={formRef}>
                    <div id="grille_info">
                        <div className="info_item">
                            <div className="form__group field">
                                <input type="input" name='user_name' required={true} className="form__field" placeholder="Name" />
                                <label htmlFor="name" className="form__label">Name<span className="red">*</span></label>
                            </div>
                        </div>
                        <div className="info_item">
                            <div className="form__group field">
                                <input type="input" name='user_surname' className="form__field" placeholder="Surname" />
                                <label htmlFor="surname" className="form__label">Surname</label>
                            </div>
                        </div>
                        <div className="info_item">
                            <div className="form__group field">
                                <input type="input" name='user_mail' className="form__field" placeholder="Email" />
                                <label htmlFor="email" className="form__label">Email<span className="red">*</span></label>
                            </div>
                        </div>
                        <div className="info_item">
                            <div className="form__group field">
                                <input type="input" name='user_phone' className="form__field" placeholder="Phone" />
                                <label htmlFor="phone" className="form__label">Phone<span className="red">*</span></label>
                            </div>
                        </div>
                        <div className="info_item">
                            <div className="form__group field">
                                <input type="input" name='user_address' className="form__field" placeholder="Address" />
                                <label htmlFor="address" className="form__label">Address</label>
                            </div>
                        </div>
                        <div className="info_item">
                            <div className="form__group field">
                                <input type="input" name='user_company' className="form__field" placeholder="Company" />
                                <label htmlFor="company" className="form__label">Company</label>
                            </div>
                        </div>
                    </div>
                    <div id="txt_to_send">
                        <textarea id="champTxt" name='user_message'></textarea><br />
                    </div>
                    <button id="button" onClick={sendMail}>Send</button><br/>
                    <p className="obli"><span className="red">* required fields</span></p>
                </form>
            </div>      
        </div>
    </div>
</div>

            
            }
        </ContactStyle>
    )
}

export default Contact