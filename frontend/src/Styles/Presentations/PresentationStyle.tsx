import styled from "styled-components";

const PresentationStyle = styled.nav`
div {
    position: relative;
    font-family: optima;
    width: 100%;
}

.tittle {
    position: relative;
    font-weight: 400;
    width: 100%;
    text-align: center;
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

export default PresentationStyle