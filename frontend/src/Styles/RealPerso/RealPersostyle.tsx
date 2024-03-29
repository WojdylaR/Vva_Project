import styled from "styled-components";
import useWindowSize from "../../Hook/useScreenSize";

interface screenWidth{
  width: any;
}

const RealPersostyle = styled.nav<screenWidth>`
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


#realperso{
  position: relative;
  top :30px;
}

.tittle_contact {
  position :relative;
  width: 80%;
  left: 10%;
  font-size: 200%;
  font-weight: 100;
  margin-bottom: 50px;
}

.red2 {
  color: #B22222;
}


#txt{
  top: 20px;
  position: relative;
  width: 70%;
  font-weight: 300;
  left: 15%;
  line-height: 1.8;
  font-size: max(115%, 1.30vw);
 
}

#cate{
  position: relative;
  width: 80%;
  left: 10%;
  top: 125px;
  margin-bottom: 150px;
  text-align: ${(props) => props.width > 800 ? "left" : "center"};
}

img{
  width:300px;
  position: relative;
  margin-left: ${(props) => props.width > 800 ? "25px" : "0px"};
}

img:hover{
  cursor: pointer;
  postion: relative;
  z-index: 2;
  transform: scale(1.1);
}

.red{
  font-weight: 700;
}

h2{
  position: relative;
  width: 50%;
}

      `

export default RealPersostyle