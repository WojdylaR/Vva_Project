import styled from "styled-components"


const FooterStyle = styled.nav`


div{
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
    text-decoration:none
   }



   button:hover {
    background-image: linear-gradient(90deg, #B22222 50%, white 50%, #B22222 50%, white 10%);
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

`

export default FooterStyle