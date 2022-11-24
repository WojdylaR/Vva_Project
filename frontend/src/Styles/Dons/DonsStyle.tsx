import styled from "styled-components";

const DonsSyle = styled.nav`
div {
    font-family: optima;
    position: relative;
    top: 125px;
    width: 64%;
    left: 18%;
    font-size: 150%;
    line-height: 2;
    height: 800px;

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
}
`

export default DonsSyle