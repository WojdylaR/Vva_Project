import styled from "styled-components";

const ContactStyle = styled.nav`
div {
    position: relative;
    font-family: optima;
    width: 100%;
    height: 725px;
}

.tittle {
    position :relative;
    width: 100%;
    font-size: 200%;
    font-family: medium;
    text-align: center;
}

.input {
    top: 25px;
    position: relative;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    line-height: 2;
}

.info {
    position: relative;
    left: 100px;
}

.champ {
    height: 25px;
    width: 300px;
}

.champTxt {
    position: relative;
    top: 50px;
    height: 250px;
    width: 500px;
}

.inputTittle {
    position: relative;
}

animation-duration: 0.75s;
    animation-name: opa;
    opacity: 0;
    animation-fill-mode: forwards;

    @keyframes opa {
        from {
          opacity: 0;
        }
      
        to {
            opacity: 1;
        }
      }
`

export default ContactStyle