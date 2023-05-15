import styled from "styled-components";



const ServicesStylePage = styled.nav `

.service_page{
}

.service_page .grille{
    position: relative;
    width: 99%;
    left: 0%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 49%));
    justify-content: center;
    grid-gap: 15px;
}

.service_page .picture{
    position: relative;
    width: 100%;
    left: 0%;
}

.service_page .grid_item{
    width: 100%;
    min-width: 360px;
}

h1{
    position: relative;
    width: 80%;
    font-size: 250%;
    font-weight: 500;
    border-bottom: 2px solid currentColor;
}
.sous_txt{
    position: relative;
    top: 55px;
    font-size: max(110%, 1.15vw);
}



.service_page .txt{
    position: relative;
    line-height: 2.3;
    width: 70%;
    left: 15%;
    margin-left:0;
    top :0%;
    margin-bottom: 150px;
}

.hide {
    display: none;
  }

`


export default ServicesStylePage