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

.tittle_contact {
  position :relative;
  width: 100%;
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
  cursor: pointer;
  postion: relative;
  z-index: 2;
}

.red{
  font-weight: 700;
}

      `

export default RealPersostyle