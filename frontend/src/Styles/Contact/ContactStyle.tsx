import styled from "styled-components";

const ContactStyle = styled.nav`
position: relative;
top: 75px;
left: 0%;


.contact .grille{
    left: 0%
    position: relative;
    width: 99%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 49%));
    justify-content: center;
    grid-gap: 15px;
}



.contact .grid_item{
    width: 49%;
    min-width: 350px;
}


.tittle_contact {
    position :relative;
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






.form__group {
    position: relative;
    padding: 20px 0 0;
    width: 100%;
    max-width: 180px;
  }
  
  .form__field {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 17px;
    color: white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }
  
  .form__field::placeholder {
    color: transparent;
  }
  
  .form__field:placeholder-shown ~ .form__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
  }
  
  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #9b9b9b;
    pointer-events: none;
  }
  
  .form__field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #B22222, #B22222);
    border-image-slice: 1;
  }
  
  .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #B22222;
    font-weight: 700;
  }
  
  /* reset input */
  .form__field:required, .form__field:invalid {
    box-shadow: none;
  }
















.all_input{
    position :relative;
    width: 80%;
    left: 10%;
    margin-bottom: 150px;
}


#champTxt {
    position: relative;
    height: 300px;
    width: 100%;
    font-family: Chivo;
    font-size: 125%;
    padding: 15px;
}

#txt_to_send{
    position: relative;
    height: 350;
    top: 50px;
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
    margin-right: 10px;
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