import styled from 'styled-components'

interface locat {
    loca: any;
}

const HeaderStyle = styled.nav<locat>`
div{
    background: black;
    color: white;
    position:absolute;
    top: 0;
    height: 10%;
    width: 100%;
    left: 0;
    font-size:120%;
}

.img{
position: absolute;
height:100%;
}

.links{
    position: absolute;
    top: 40%;
    width: 100%;
    text-align: center;
    word-spacing: 100px;
}

.link{
    text-decoration:none;
    
}

.link:hover{
    text-decoration: underline;
}
.link:active{
    color: grey;
}

#Home{
    color: ${(props) => props.loca === "/" ? "#B22222" : "white"};
}

#Presentation{
    color: ${(props) => props.loca === "/prestations" ? "#B22222" : "white"};
}

#Evenements{
    color: ${(props) => props.loca === "/evenements" ? "#B22222" : "white"};
}

#Service{
    color: ${(props) => props.loca === "/service" ? "#B22222" : "white"};
}

#Dons{
    color: ${(props) => props.loca === "/don" ? "#B22222" : "white"};
}

`

export default HeaderStyle