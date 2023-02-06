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

height: 800px;
position: relative;

#video{
  position: relative;
  top:50px;
  width: 100%;
}

#video1{
  position: relative;
  float: left;
  left: 1%;
}

#video2{
  position: relative;
  right: -3%;
}


#txt{
  position: relative;
  top: 30px;
  width: 60%;
  left: 20%;
  font-size: 125%;
  border-radius: 10px;
  background-image: url("../../asset/background_img.jpg");
}
      `

export default RealPersostyle