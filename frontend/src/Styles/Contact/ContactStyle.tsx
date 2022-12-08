import styled from "styled-components";

const ContactStyle = styled.nav`
div {
    position: relative;
    font-family: optima;
    width: 100%;
}

.tittle_contact {
    position :relative;
    width: 100%;
    font-size: 200%;
    font-weight: 400;
    text-align: center;
}

#obli{
    font-size: 75%;
    position: relative;
    top: -10px;
}

.input {
    top: 25px;
    position: relative;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    line-height: 2;
    
    
}

.link{
    float:left;
}

.info {
    position: relative;
}

.champ{
    height: 25px;
    width: 40%;
}

.champ2{
    position:absolute;
    left: 60%;
    height: 25px;
    width: 40%;
}

.champTxt {
    position: relative;
    height: 250px;
    width: 500px;
}

.txttosend{
    
}

.inputTittle {
    position: relative;
}

.inputTittle2 {
    position: absolute;
    left:60%;
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