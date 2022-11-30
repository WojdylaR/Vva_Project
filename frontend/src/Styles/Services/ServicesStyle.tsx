import styled from "styled-components";

const ServicesStyle = styled.nav`
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

#all{
}



#menu{
  word-spacing: 50px;
  text-align: center;
}

.link{
position: relative;
text-decoration:none;
}

.img{
  position: relative;
  width: 13.166%;
  filter: blur(0px);
  opacity: 1;
  border-radius: 10px;
}

.img:hover{
  filter: blur(4px);
  opacity: 0.7;
  width: 13.20%;
  backgroud: green;
  
}

.img:hover ~ .tittle_link{
  opacity: 1;
}

.img:hover ~ .tittle_link{
  opacity: 1;
}

.tittle_link{
  position:absolute;
  color: white;
  left: -2%;
  width: 90%;
  font-size: 200%;
  opacity: 0;
  top: -1750%;
}

`

export default ServicesStyle