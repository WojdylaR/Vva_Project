import styled from "styled-components"


const FooterStyle = styled.nav`


div{
    position: relative;
    top:0px;
    left: 0px;
    background: #141414;
}

#bordertop{
    border-top: 4px solid white ;
    width: 50%;
    left: 25%;
    border-radius: 300px;
}

button {
    background-color: #444141;
    border-radius: 10px;
    color: #fff;    
    cursor: pointer;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    border: none;
    text-decoration:none;
    position: relative;
    top: -10px;
   }



   button:hover {
    background-image: linear-gradient(90deg, white 50%, white 50%, white 50%, white 10%);
    animation: slidernbw 5s linear infinite;
    color: #000;
   }
   
   @keyframes slidernbw {
    to {
     background-position: 20vw;
    }
   }

#Contact{
    
    text-decoration:none;
    color: white;
}

#Contact:hover{
    text-decoration:none;
    color: black;
}

.ronan{
    text-decoration: none;
    color: #DEDEDE  ;
}

.grille{
    position: relative;
    left: 5%;
    width: 89%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    justify-content: center;

    grid-gap: 70px;
}

.grid-item{
    width: 350px;
    height: 170px;
    justify-self: center;
}

.txt_nav .link {
    text-decoration: none;
    color: white;
    font-weight: 600;
    position: relative;
    top : -20px;
}


.txt_reseau{
    position: relative;
    left: 20px;
}

.txt_reseau .logo_soc{
    width: 30px;
    margin-right: 25px;
}

.txt_nav{
    left: 150px;
    position: absolute;
    line-height: 1.5;
    word-spacing: 10px;
}

.txt_nav_petit_ecran{
    word-spacing: 10px;
    position: absolute;
    top: 50px;
    left: 20px;
}

.link_petit_ecran {
    text-decoration: none;
    color: white;
    font-weight: 600;
    position: relative;
    top : -20px;
}

.txt_nav_petit_ecran .links{
    position: relative;
    top 20px;
}


.link:hover{
    text-decoration: underline;
}

.txt_logo{
    position: absolute;
    width: 100%;
    left: 3%;
    top: -5px;
}

.txt_logo #logo_video{
    top: 50px;
    
    position: absolute;
    right: 3%;
    width: 80px;
}

.logo_soc:hover{
    transform: scale(1.2);
}

.txt_contact .p1{
    position absolute;
    text-align: center;
    width: 100%;
}

.txt_contact .p2{
    position: absolute;
    top: 115px;
    font-size: 90%;
    left: 20px;
}

.txt_contact .mail_logo{
    position: relative;
    width: 15px;
    top: 2px;
}

.txt_contact .mail{
    width: 100%;
    text-align: center;
    position: absolute;
}

.ronan{
    position: relative;
    width: 100%;
    text-align: center;
}

.rw{
    color: #C1C1C1;
    decoration-text: none;
}
`

export default FooterStyle