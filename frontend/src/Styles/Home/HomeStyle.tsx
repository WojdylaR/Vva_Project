import styled from "styled-components";

const HomeStyle = styled.nav`

  
  

p.first {
    position : relative;
    height: 480px;
    font-family: Optima;
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

.first_img {
    position: absolute;
    height: 100%;
    right: 5%;
    top: -3%;


    animation-delay: 1s;
    animation-duration: 0.5s;
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

.second_img {
    position: absolute;
    height: 100%;
    left: 5%;
    top: -3%;

    animation-delay: 3s;
    animation-duration: 0.5s;
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


@keyframes slide {
    from {

    }

    to {

    }
}

`

export default HomeStyle