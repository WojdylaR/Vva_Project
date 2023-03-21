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


.red2{
  color: #B22222;
}

.tittle_contact {
  position :relative;
  width: 100%;
  left: 10%;
  font-size: 200%;
  font-weight: 100;
  
}

#txt{
  top: 20px;
  position: relative;
  width: 70%;
  font-weight: 500;
  left: 15%;
  line-height: 1.8;
  font-size: 145%;
}

#cate{
  position: relative;
  width: 90%;
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

.red{
  font-weight: 700;
}

      `

export default RealPersostyle