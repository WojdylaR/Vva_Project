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



.service .grille{
  top: 50px;
  position: relative;
    width: 99%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 14vw));
    grid-gap: 30px;
    justify-content: center;
    margin-bottom: 70px;
}

.service .tittle_serv{
  position: absolute;
  top: 45%;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: max(175%, 2vw);
  filter: blur(0px);
  opacity: 1; 
  
}


.card .video{
  transition: 0.1s;
}

.service .grid_item{
  width: 14vw;
  min-width: 170px;
  
}

.card:hover .video{
  filter: blur(0px);
  transform: scale(1.1);
}


.video{
  position: relative;
  width: 100%;
  filter: blur(4px);
}

.card:hover .tittle_serv{
  opacity: 0.2;
}

`

export default ServicesStyle