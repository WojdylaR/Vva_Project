import styled from "styled-components"


const FooterStyle = styled.nav`


div{
    font-family:Montserrat;
    position: relative;
    width: 100%;
    top:10px;
    text-align: center;
    line-height:1;
    font-size: 125%;
}

#bordertop{
    border-top: 4px solid white ;
    width: 50%;
    left: 25%;
    border-radius: 300px;
}

.contact{
    position: relative;
    background: white;
    position: relative;
    border:6px solid white;
    border-radius: 30px;
    font-size: 90%;
}

.link{
    position:relative;
    color: black;
    text-decoration:none;
    width:200;
}

.link:hover{
    text-decoration: underline;
}
.link:active{
    color: grey;
}

`

export default FooterStyle