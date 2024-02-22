import { Link } from "react-router-dom"
import styled from "styled-components"
import gsap from "gsap"
import { useEffect } from "react"

function Video(){
    useEffect(()=>{
        gsap.fromTo('#arrowWrapper' ,{opacity: 0},{opacity: 1, delay: 7,})
        gsap.fromTo('#arrowWrapper',{y: 0},{y: 20, delay: 8, duration: 1, repeat:-1})
        gsap.fromTo('.description',{opacity: 0},{opacity: 1, delay: 5, duration: 1})
    })
    return(
        <VideoStyle>
            <div className="description">
                <h2>L’agence de vidéo réalisatrice de contenus <span className="red">éthiques</span> et <span className="red">responsables</span>.<br/> 
                    <span className="strokeWrap">Spécialisée dans la création de vidéo engagée.</span></h2>
                <p> Depuis 2023, notre agence de vidéo a réalisé différentes <Link key={2} className="link" id="RealPerso" to="/realperso">“Réalisation”</Link> auto-produite orientées vers des thématiques telles que : actualités, sujets sociétaux, écologiques et humanitaires. <br/>
                    En parallèle, nos <Link className="link" id="Service" to="/service">“SERVICES”</Link> nous permettent de couvrir l’intégralité de vos projets audiovisuels : mariage, vidéo corporate BtoB, événementiel, immobilier…<br />
                    Nos contenus, en fonction de votre public cible, vos attentes et objectifs peuvent prendre plusieurs formes :  autoportrait, reportage, documentaire, short… Parlons en directement en prenant un rendez vous dès maintenant.  Et enfin comme sur la photo un carré avec contactez nous renvoyant vers la page “contact”
                </p>
            </div>
            <img id="logo_video" src={require('../../assets/logo/logo_vva_cam.png')} alt="logo_vva_blanc" />
            
            <video loop={true} muted={true} autoPlay={true} playsInline={true}  id="video" src={require('../../assets/background_video.mp4')} />
            <div id="arrowWrapper"><img className="arrow" src={require('../../assets/logo/fleche_bas.png')}/><img className="arrow" src={require('../../assets/logo/fleche_bas.png')}/></div>
            
        </VideoStyle>
    )
}

export default Video

const VideoStyle = styled.section`

    width: 100vw;
    justify-content: center;
    display: flex;

    .arrow{
        position:  relative;
        width: 5vw;
        min-width: 40px;
    }

    #arrowWrapper{
        width: 100%;
        display: flex;
        justify-content: space-around;
        position: absolute;
        top: 35vw;
        opacity: 0;
        z-index: 3;
    }

    .link{
        text-decoration: none;
        color: white;
        font-weight: 400;
    }

    #logo_video{
        position: absolute;
        z-index:1;
        width:25%;
        top: 14vw;
        animation-delay: 3s;
        animation-duration: 2s;
        animation-name: opa_logo;
        opacity: 0;
        animation-fill-mode: forwards;
    }

    .description{
        opacity: 1;
        z-index: 1;
        position: absolute;
        opacity: 0;
        padding-left: 5vw;
        padding-right: 10vw;
        top: 11vw;
        box-sizing: border-box;
    }

    h2{
        font-size: max(20px,2.2vw);

        line-height: 1.5;
    }

    .strokeWrap{
        font-family:Chivo;
        font-weight: 100;
        font-size: 90%;
    }

    p{
        font-size: max(0.8vw, 11px);
        position: relative;
        width: 75%;
        line-height: 20px;
        top: 25px;
    }

    video{
        animation-name: opa_video;
        animation-delay: 3s;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        width: 100vw;
    }

    @keyframes opa_logo {
        0% {
        opacity: 0;
        }
    
        25% {
            opacity: 1;
        }

        75%{
            opacity: 1;
        }

        100%{
            opacity: 0;
        }
    }

    @keyframes opa_video {
        from {
            opacity: 1;
        }
    
        to {
            opacity: 0.3;
        }
    }   



    @media (max-width: 800px){
        p{
            display: none;
        }

        h2{
            position: relative;
            top: 0px;
        }
    }
`