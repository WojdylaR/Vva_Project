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
  position: relative;
  width: 92%;
  left: 3%;
  top: 100px;
}

height: 800px;

#menu{
  word-spacing: 50px;
  text-align: center;
  
}

.link{
position: relative;
text-decoration:none;
margin-left: 50px;
}

.img{
  position: relative;
  width: 13.166%;
  filter: blur(4px);
  opacity: 0.8;
  border-radius: 10px;
}

.img:hover{
  filter: blur(0px);
  opacity: 1;
  width: 13.20%;
}

.img:hover ~ .tittle_link{
  opacity: 1;
}

.img:hover ~ .tittle_link{
  opacity: 0.3;
  background:rgba(0,0,0, 0);
}

.tittle_link{
  position:absolute;
  color: white;
  background:rgba(0,0,0, 0.0);
  left: -5%;
  width: 110%;
  font-size: 200%;
  opacity: 1;
  top: -1750%;
}

.txt_right{
  background: red;
}

`

export default ServicesStyle