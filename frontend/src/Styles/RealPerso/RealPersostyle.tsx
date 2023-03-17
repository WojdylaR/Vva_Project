import styled from "styled-components";

const RealPersostyle = styled.nav`
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

#txt{
  top: 50px;
  position: relative;
  width: 70%;
  left: 15%;
  font-size: 125%;
}

#cate{
  position: relative;
  left: 10%;
  top: 125px;
  margin-bottom: 150px;
}

.video{
  width:300px;
  position: relative;
  margin-left: 25px;
}

.video:hover{
  transform: scale(1.3);
  cursor: pointer;
  postion: relative;
  top: -25px;
  z-index: 2;
}

.video:active{
  position: fixed;
  left: 5%;
  width: 90%;
  z-index: 2;
  top: 10%;
}
      `

export default RealPersostyle