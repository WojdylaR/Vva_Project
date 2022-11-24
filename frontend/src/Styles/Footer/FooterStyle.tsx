import styled from "styled-components"


const FooterStyle = styled.nav`


div{
    position: relative;
    font-family: optima;
    width: 100%;
    top:10px;
}

#bordertop{
    border-top: 4px solid white ;
    width: 50%;
    left: 25%;
    border-radius: 300px;
}

.reseaux{
    position: relative;
    text-align: center;
}

.logo{
    text-decoration:none;
}

.contact{
    position: relative;
    background: white;
    height: 10px;
    position: relative;
    border-radius: 30px;
    top: -16px;
}

.link{
    color: black;
    text-decoration:none;
    height: 800px;
}

.link:hover{
    text-decoration: underline;
}
.link:active{
    color: grey;
}

`

export default FooterStyle