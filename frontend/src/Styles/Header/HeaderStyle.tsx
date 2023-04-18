import styled from 'styled-components'

interface locat {
    loca: any;
}

const HeaderStyle = styled.nav<locat>`
#big_screen {
    color: white;
    position:fixed;
    top: 0%;
    height: 90px;
    width: 100%;
    left: 0%;
    font-size: 100%;
    z-index: 1;
    backdrop-filter: blur(5px);
}

#big_screen .link_logo{
    position: relative;
    z-index:3;
}

#big_screen #logo{
    position:absolute;
    height: 90px;
}

#big_screen .links{
    position: absolute;
    top: 10%;
    width: 100%;
    text-align: center;
    word-spacing: 6vw;
}

#big_screen .link{
    font-weight: 500;
    text-decoration:none;
}

#big_screen .link:hover{
    text-decoration: underline;
    opacity:1.0;
    
}

#big_screen .link:active{
    color: grey;
}

#big_screen #logo_social{
        position: absolute;
        right: 20px;
        top: 10%;
}

#big_screen .logo_soc{
    z-index: 2;
    width: 30px;
    margin-left: 10px;
}

#big_screen .logo_soc:hover{
    transform: scale(1.2);
}

#Home{
    color: ${(props) => props.loca === "/" ? "#B22222" : "white"};
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


#little_screen{
    text-align: center;
    position:fixed;
    top: 0%;
    left: 0%;
    height: 90px;
    width: 100%;
    z-index: 1;
    backdrop-filter: blur(5px);
}

#little_screen .logo_soc{
    width: 30px;
    position: relative;
}

#little_screen #logo_social{
    position: absolute;
    right: 10px;
    top: 10px;
}

#little_screen .logo{
    margin-left: 5px;
}

#little_screen #logo{
    position: relative;
    width: 80px;
}

#little_screen .logo_soc:hover{
    transform: scale(1.2);
}

.menunav{
    position: fixed;
    z-index: 1;
    top: 90px;
    width: 100%;
    left: 0px;
    background: rgb(20, 20, 20, 0.9);
    backdrop-filter: blur(5px);
    line-height: 2;
}

.menunav .links{
    position: relative;
    width: 80%;
    left: 10%;
}

.menunav .link{
    text-decoration: none;
}



.button_menu{
    position: absolute;
    top: 25px;
    left: 20px;
}


#checkbox {
    display: none;
  }
  
  .toggle {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition-duration: .5s;
  }
  
  .bars {
    width: 100%;
    height: 4px;
    background-color: white;
    border-radius: 4px;
  }
  
  #bar2 {
    transition-duration: .8s;
  }
  
  #bar1,#bar3 {
    width: 70%;
  }
  
  #checkbox:checked + .toggle .bars {
    position: absolute;
    transition-duration: .5s;
  }
  
  #checkbox:checked + .toggle #bar2 {
    transform: scaleX(0);
    transition-duration: .5s;
  }
  
  #checkbox:checked + .toggle #bar1 {
    width: 100%;
    transform: rotate(45deg);
    transition-duration: .5s;
  }
  
  #checkbox:checked + .toggle #bar3 {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: .5s;
  }
  
  #checkbox:checked + .toggle {
    transition-duration: .5s;
    transform: rotate(180deg);
  }





`

export default HeaderStyle