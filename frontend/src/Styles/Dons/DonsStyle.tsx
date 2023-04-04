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
  font-size: max(100%, 1.5vw);
}


#photo{
  position: relative;
  width: 60%;
  min-width: 450px;
  border-radius: 20px;
}

#logo_tipeee{
  position: relative;
  width: 25%;
  min-width: 350px;
  top: -20px;
}
`

export default DonsSyle