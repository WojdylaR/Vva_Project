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



.logo_container{
  position: relative;
  background: red;
  margin: auto;
  width: 70px;
}

#haut_gauche{
  position: absolute;
  width: 60px;
  left: -175px;
  top: -30px;
  transform: rotate(-45deg)
}

#haut_droite{
  position: absolute;
  width: 60px;
  left: 185px;
  top: -30px;
  transform: rotate(45deg)
}

#bas_droite{
  position: absolute;
  width: 60px;
  left: 185px;
  top: -120px;
  transform: rotate(135deg);
}

#bas_gauche{
  position: absolute;
  width: 60px;
  left: -175px;
  top: -120px;
  transform: rotate(225deg);
}

#photo{
  position: relative;
  width: 60%;
  min-width: 350px;
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