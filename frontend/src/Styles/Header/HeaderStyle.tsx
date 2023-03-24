import styled from 'styled-components'

interface locat {
    loca: any;
}

const HeaderStyle = styled.nav<locat>`
div{
    color: white;
    position:fixed;
    top: 0%;
    height: 90px;
    width: 100%;
    left: 0;
    font-size: 100%;
    z-index: 1;
    backdrop-filter: blur(5px);
}

.link_logo{
    position: relative;
    z-index:3;
}

#logo{
    position:absolute;
    height: 90px;
}

.links{
    position: absolute;
    top: 10%;
    width: 100%;
    text-align: center;
    word-spacing: 6vw;
}

.link{
    font-weight: 500;
    text-decoration:none;
}

.link:hover{
    text-decoration: underline;
    opacity:1.0;
    
}
.link:active{
    color: grey;
}

#logo_social{
        position: absolute;
        right: 20px;
        top: 10%;
}

.logo_soc{
    z-index: 2;
    width: 30px;
    margin-left: 10px;
}

.logo_soc:hover{
    transform: scale(1.2);
}

#Home{
    color: ${(props) => props.loca === "/" ? "white" : "white"};
}

#Presentation{
    color: ${(props) => props.loca === "/presentation" ? "#B22222" : "white"};

}

#RealPerso{
    color: ${(props) => props.loca === "/realperso" ? "#B22222" : "white"};
}

#Service{
    color: ${(props) => props.loca[1] === "s" ? "#B22222" : "white"};
}

#Dons{
    color: ${(props) => props.loca === "/don" ? "#B22222" : "white"};
}

#Contact{
    color: ${(props) => props.loca === "/contact" ? "#B22222" : "white"};
}

#reseau{
}

`

export default HeaderStyle