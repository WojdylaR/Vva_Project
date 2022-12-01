import styled from "styled-components";

const HomeStyle = styled.nav`

#all{
    position: relative;
    top: -110px;
    animation-duration: 2s;
    animation-name: opa;
    opacity: 0;
    animation-fill-mode: forwards;
}

@keyframes opa {
    from {
      opacity: 0;
    }
  
    to {
        opacity: 1;
    }
  }

/******************************* Video ***************************/


#video{
    width: 100%;
    animation-delay: 3s;
    animation-duration: 1s;
    animation-name: opa_video;
    opacity: 0.9;
    animation-fill-mode: forwards;
}

#logo_video{
    position: absolute;
    z-index:1;
    top: 30%;
    width:15%;
    left:42.5%;
    word-spacing: 50px;
    line-height: 225px;
    animation-delay: 3s;
    animation-duration: 1s;
    animation-name: opa_txt;
    opacity: 0;
    animation-fill-mode: forwards;
}

@keyframes opa_txt {
    from {
      opacity: 0;
    }
  
    to {
        opacity: 0.9;
    }
}


@keyframes opa_video {
    from {
        opacity: 0.6;
    }
  
    to {
        opacity: 0.4    ;
    }
}

/******************************* TextPresentation ***************************/


#TextPresentation{
    top: 25px;
    position: relative;
    width:92%;
    left:4%;
    overflow:hidden;
    line-height: 2;
    font-size: 115%;
}

.sous_titre{
    font-size: 185%;
}

.para{
    position: relative;
    width: 28.33%;
    float:left;
    margin-left: 3%;
}


/******************************* Portraits ***************************/


/******************************* Confiance ***************************/
`

export default HomeStyle