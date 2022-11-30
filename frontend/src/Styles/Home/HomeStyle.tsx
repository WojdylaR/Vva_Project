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


p.first {
    position : relative;
    height: 480px;
    font-family: Optima;
}

#video{
    width: 100%;
    animation-delay: 3s;
    animation-duration: 1s;
    animation-name: blur_video;
    opacity: 0.9;
    animation-fill-mode: forwards;
}

@keyframes blur_video {
    from {
        opacity: 0.6;
    }
  
    to {
        opacity: 0.4    ;
    }
  }

#txt_video{
    position: absolute;
    z-index:1;
    top: 6%;
    width: 100%;
    text-align: center;
    font-size: 900%;
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

.first_para {
    position: relative;
    top: 35%;
    left: 10%;
    width: 10%;
    font-size: 300%;
    line-height: 1.5;

    animation-delay: 0.5s;
    animation-duration: 1s;
    animation-name: opa;
    opacity: 0;
    animation-fill-mode: forwards;
}

p.second {
    position: relative;
    height: 480px;
}

.second_para {
    font-family: Optima;
    position: relative;
    top: 30%;
    left: 60%;
    width: 10%;
    font-size: 300%;
    line-height: 1.5;

    animation-delay: 2.5s;
    animation-duration: 1s;
    animation-name: opa;
    opacity: 0;
    animation-fill-mode: forwards;
}

.second_phrase {
    font-size: 50%;
}


@keyframes opa {
    from {
      opacity: 0;
    }
  
    to {
        opacity: 1;
    }
  }

  

`

export default HomeStyle