import styled from "styled-components"


const FooterStyle = styled.nav`

    .nowrap{
        display: flex;
        justify-content: center;
        white-space: nowrap;
    }

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
    box-sizing: border-box;
    padding-right: 50px;
}

#Contact:hover{
    text-decoration:none;
    color: black;
}

.ronan{
    text-decoration: none;
    color: #DEDEDE ;
}

.grille{
    position: relative;
    left: 5%;
    width: 89%;
    height: auto;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(360px,33%));
}

.grid-item{
    width: 100%;
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
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logoWrapper{
    width: 110px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
}

.txt_reseau .logo_soc{
    width: 30px;

}

.txt_nav{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    line-height: 1.5;
    word-spacing: 10px;
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


.txt_contact{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.txt_contact .p2{
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 90%;
}

.txt_contact .mail_logo{
    position: relative;
    width: 15px;
}
.ronan{
    position: relative;
    width: 100%;
    text-align: center;
}

.rw{
    color: #C1C1C1;
    text-decoration: none;
}
`

export default FooterStyle