import styled from "styled-components";

const DonsSyle = styled.nav`

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

#don{
  top: 50px;
  position: relative;
  text-align: center;
  font-size: 125%;
}


#photo{
  position: relative;
  width: 60%;
  border-radius: 20px;
}

#logo_tipeee{
  position: relative;
  width: 25%;
  top: -20px;
}
`

export default DonsSyle