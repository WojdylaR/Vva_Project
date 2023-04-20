import React, {useRef, useState} from "react";
import ContactStyle from "../../Styles/Contact/ContactStyle";
import axios from "axios";
import emailjs from '@emailjs/browser';



function Contact(){
    
    const formRef = useRef<HTMLFormElement>(null);

    const API_KEY= "17d7fcce8d579965da3a47743b75490f40c33e377379cdad93cdfadb7f547595"
    const sendMail = () => {
        if (formRef.current){   
         emailjs.sendForm('service_pkovtdj', 'template_jjlafi8', formRef.current , 'PL6AlK1qQm8XUi8Wh')
      .then((result) => {
            alert("Merci à vous, Nous vous rappelons des que possible !")
          console.log(result.text);
      }, (error) => {
            alert("Il semblerait qu'une erreur s'est produite ...")
          console.log(error.text);
      });
        }
        
        window.location.reload()
}
        


    return (
        <ContactStyle>
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
            </div>
        </ContactStyle>
    )
}

export default Contact