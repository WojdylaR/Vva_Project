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
    font-size:120%;
    z-index: 1;
    backdrop-filter: blur(5px);
}

#logo{
    position:absolute;
    height: 90px;
    left: 10px;
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

#logo_social{
        position: absolute;
        width: 200px;
        left: 89%;
        top: 30%;
}

.logo_soc{
    position: realtive;
    z-index: 2;
    width: 30px;
    margin-left: 10px;
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

#reseau{
}

`

export default HeaderStyle