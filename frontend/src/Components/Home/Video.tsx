import styled from "styled-components"

function Video(){
    return(
        <VideoStyle>
            <div>
                <h2>L’agence de vidéo réalisatrice de contenus <span className="red">éthiques</span> et <span className="red">responsables</span>.<br/> 
                    <span className="strokeWrap">Spécialisée dans la création de vidéo engagée.</span></h2>
                <p> Depuis 2023, notre agence de vidéo a réalisé différentes “Réalisation” (link vers l’onglet réalisations”) auto-produite orientées vers des thématiques telles que : actualités, sujets sociétaux, écologiques et humanitaires. <br/>
                    En parallèle, nos “SERVICES” (link vers l’onglet services) nous permettent de couvrir l’intégralité de vos projets audiovisuels : mariage, vidéo corporate BtoB, événementiel, immobilier…<br />
                    Nos contenus, en fonction de votre public cible, vos attentes et objectifs peuvent prendre plusieurs formes :  autoportrait, reportage, documentaire, short… Parlons en directement en prenant un rendez vous dès maintenant.  Et enfin comme sur la photo un carré avec contactez nous renvoyant vers la page “contact”
                </p>
            </div>
            <img id="logo_video" src={require('../../assets/logo/logo_vva_cam.png')} alt="logo_vva_blanc" />
            
            <video loop={true} muted={true} autoPlay={true} playsInline={true}  id="video" src={require('../../assets/background_video.mp4')} /> 
            
        </VideoStyle>
    )
}

export default Video

const VideoStyle = styled.section`

    width: 100vw;
    justify-content: center;
    display: flex;

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

    div{
        opacity: 1;
        z-index: 1;
        position: absolute;
        opacity: 0;
        padding-left: 5vw;
        padding-right: 10vw;
        top: 2vw;
        animation-name: opaTxt;
        animation-delay: 5s;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        box-sizing: border-box;
    }

    h2{
        font-size: 4vw;
        line-height: 1.5;
    }

    .strokeWrap{
        color: transparent; /* Couleur du texte transparente à l'intérieur */
        -webkit-text-stroke: 0.1px white; /* Contour noir autour du texte */
        -moz-text-stroke: 0.1px white;
    }

    p{
        font-size: max(1vw, 11px)
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
            filter: blur(0px)
        }
    
        to {
            opacity: 0.3;
            filter: blur(5px)
        }
    }   

    @keyframes opaTxt{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`