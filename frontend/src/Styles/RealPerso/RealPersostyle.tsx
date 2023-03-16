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
  position: relative;
  width: 80%;
  left: 10%;
  font-size: 125%;
  border-radius: 10px;
}

#cate{
  position: relative;
  top 30px;
  text-align: center;
}

.video{
  width:300px;
  position: relative;
  margin-left: 25px;
}

.video:hover{
  transform: scale(1.1);
  cursor: pointer;
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