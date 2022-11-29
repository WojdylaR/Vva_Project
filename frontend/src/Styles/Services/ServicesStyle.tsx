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

#tittle{
  position: relative;
  font-size: 200%;
  left: 3%;
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
  border-radius: 10px;
}

.img:hover{
  filter: blur(4px);
  width: 13.20%;
}

.tittle_link{
  position:absolute;
  color: white;
  left: 5%;
  

}

`

export default ServicesStyle