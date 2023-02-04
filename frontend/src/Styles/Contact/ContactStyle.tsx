import styled from "styled-components";

const ContactStyle = styled.nav`
#all_input{
    position: relative;
    font-family: optima;
    width: 50%;
    float:left;
    left: 10%;
}

.tittle_contact {
    position :relative;
    width: 100%;
    font-size: 200%;
    font-weight: 400;
}

#obli{
    font-size: 75%;
    position: relative;
    top: -10px;
}

#info {
    
}

#info input {
        font-size: 100%;
        padding: 0.8em;
        outline: none;
        border: 2px solid rgb(200, 200, 200);
        background-color: transparent;
        border-radius: 10px;
        width: 20%;
        color: white;
}

.right{
    position:relative;
    left:10%;
}

#bot{
    position:relative;
    top: 50px;
}

.info label {
    font-size: 100%;
    position: absolute;
    left: 0;
    background-color: transparent;
    padding: 0.8em;
    margin-left: 0.5em;
    pointer-events: none;
    transition: all 0.3s ease;
    color: white;
  }

.info :focus ~label {
    transform: translateY(-50%) scale(.9);
    margin: 0em;
    margin-left: 1.3em;
    padding: 0.4em;
    background-color: black;
  }


#info :focus {
    border-color: rgb(150, 150, 200);
  }

.link{
    float:left;
}

.info {
    position: relative;
}



.champ{
    width: 40%;
}

.champ2{
    width: 40%;
}

.champTxt {
    position: relative;
    height: 250px;
    width: 500px;
}

#txt_to_send{
    position: relative;
    height: 350px;
    top: 100px;
}


button {
    position: relative;
    top:10px;
    width:510px;
    padding: 17px 40px;
    border-radius: 10px;
    border: 0;
    background-color: rgb(255, 56, 86);
    letter-spacing: 1.5px;
    font-size: 15px;
    transition: all .3s ease;
    box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
    color: hsl(0, 0%, 100%);
   }
   
   button:hover {
    box-shadow: rgb(201, 46, 70) 0px 7px 0px 0px;
   }
   
   button:active {
    background-color: rgb(255, 56, 86);
    /*50, 168, 80*/
    box-shadow: rgb(201, 46, 70) 0px 0px 0px 0px;
    transform: translateY(5px);
    transition: 200ms;
   }

#obli{
    position:relative;
    top: 70px;
}

#second_div{
    position:relative;
    text-align: center;
    width:50%;
    left:50%;
}

animation-duration: 0.75s;
    animation-name: opa;
    opacity: 0;
    animation-fill-mode: forwards;

    @keyframes opa {
        from {
          opacity: 0;
        }
      
        to {
            opacity: 1;
        }
      }
`

export default ContactStyle