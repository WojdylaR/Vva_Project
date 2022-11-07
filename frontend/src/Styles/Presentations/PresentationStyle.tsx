import styled from "styled-components";

const PresentationStyle = styled.nav`
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