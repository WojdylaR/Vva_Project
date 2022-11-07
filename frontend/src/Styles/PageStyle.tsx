import styled from "styled-components";

const PageStyle = styled.nav`
    position: absolute;
    color: black;
    top: 10%;
    width:100%;
    left: 0;

    animation-duration: 0.5s;
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

export default PageStyle