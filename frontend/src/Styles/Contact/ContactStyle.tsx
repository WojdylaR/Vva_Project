import styled from "styled-components";

const ContactStyle = styled.nav`
position: relative;
top: 75px;

#all_input{
    position: relative;
    font-family: optima;
    width: 50%;
    float:left;
    left: 10%;

}

.contact .grille{
    position: relative;
    width: 99%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(480px, 49%));
    justify-content: center;
    grid-gap: 15px;
}



.contact .grid_item{
    width: 100%;
    min-width: 480px;
}


.tittle_contact {
    position :relative;
    width: 100%;
    top: -35px;
    font-size: 200%;
    font-weight: 100;
}

h1{
    font-weight:300;
    left: 10%;
    position: relative;
    width: 50%
}


#grille_info{
    position: relative;
    width: 99%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 48%));
    grid-gap: 15px;
}

#grille_info input {
        font-size: 100%;
        padding: 0.8em;
        outline: none;
        border: 2px solid rgb(200, 200, 200);
        background-color: transparent;
        border-radius: 10px;
        width: 100%;
        color: white;
}

.all_input{
    position :relative;
    width: 80%;
    left: 10%;
    margin-bottom: 50px;
}

.right{
    position:relative;
    left:10%;
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


#grille_info :focus {
    border-color: rgb(150, 150, 200);
  }

.link{
    float:left;
}

.info {
    position: relative;
}

#champTxt {
    position: relative;
    height: 300px;
    width: 100%;
}

#txt_to_send{
    position: relative;
    height: 350;
    top: 2em;
}


button {
    position: relative;
    top:10px;
    width: 100%;
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

.obli{
    position:relative;
    top: 10px;
}

.scnd_div{
    position:relative;
    top: -50px;
    text-align: center;
    width: 80%;
    float: right;
    right: 10%;
    line-height: 2.3;
    font-size: 150%;
    margin-bottom: 100px;
}

.scnd_tittle{
    position: relative;
    border-bottom: 2px solid currentColor;
    width: 100%;
    font-weight: 300;
}

.prenom{
    font-size: 125%;
}

.fondateur{
    position: relative;
    top: -20px;
    font-size: 75%;
}

.numero2{
    position: relative;
    border-bottom: solid;
    width: 180px;
    display: inline;
    font-family: "Chivo";
    font-weight: 300;
}

.numero1{
    border-bottom: solid;
    margin-right: 50px;
    width: 180px;
    display: inline;
    font-family: "Chivo";
    font-weight: 300;
}
#txt_scnd_div{
    position: relative;
    top 100px;
    margin-bottom: 200px;
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


.logo_phone{
    position: relative;
    width: 1.75vw;
    min-width: 22px;
    left: -5px;
    top: 5px;
}

.num {
    white-space:nowrap;
    font-size: max(80%, 1.5vw)
}

`

export default ContactStyle