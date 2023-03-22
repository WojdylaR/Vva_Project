import styled from "styled-components";

const HomeStyle = styled.nav`

#all{
    position: relative;
    top: -110px;
    animation-duration: 2s;
    animation-name: opa;
    opacity: 0;
    animation-fill-mode: forwards;
}

.border{
    position: relative;
    width: 14%;
    left: 43%;
    height: 25x;
    top: 50px;
    border-radius: 5px;
    border-bottom: 4px solid white ;
    z-index: 1;
}

@keyframes opa {
    from {
      opacity: 0;
    }
  
    to {
        opacity: 1;
    }
  }

/******************************* Video ***************************/


#video{
    width: 100%;
    animation-delay: 3s;
    animation-duration: 1s;
    animation-name: opa_video;
    opacity: 0.9;
    animation-fill-mode: forwards;
}

#logo_video{
    position: absolute;
    z-index:1;
    width:25%;
    left:37.5%;
    top: 18vw;
    word-spacing: 50px;
    line-height: 225px;
    animation-delay: 3s;
    animation-duration: 1s;
    animation-name: opa_txt;
    opacity: 0;
    animation-fill-mode: forwards;
}

@keyframes opa_txt {
    from {
      opacity: 0;
    }
  
    to {
        opacity: 0.9;
    }
}


@keyframes opa_video {
    from {
        opacity: 0.6;
    }
  
    to {
        opacity: 0.4    ;
    }
}
/*******************************       Nous       ***************************/

#nous{
    position: relative;
    width: 85%;
    left: 7.5%;
    top: 45px;
    margin-bottom: 125px;
}

#nous p{
    line-height: 1.2;
    font-size: 125%;
    position: relative;
    top : 50px;
}

#nous h2{
    font-size: 185%;
}

#nous .red{
    font-weight: 700;
}

#nous .but{
    text-align: center;
    position: relative;
    width: 100%;
    top: 75px;
    left: 40px;
}

.red2{

}

button {
    position: relative;
    font-size: 1.5em;
    padding: 0.7em 1.4em;
    background-color: #BF0426;
    text-decoration: none;
    border: none;
    border-radius: 0.5em;
    color: #DEDEDE;
    box-shadow: 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.3);
  }
  
 #nous button::before {
    position: absolute;
    content: '';
    height: 0;
    width: 0;
    top: 0;
    left: 0;
    background: linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(150,4,31,1) 50%, rgba(191,4,38,1) 60%);
    border-radius: 0 0 0.5em 0;
    box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);
    transition: 0.3s;
  }
  
 #nous button:hover::before {
    width: 1.6em;
    height: 1.6em;
  }
  
 #nous button:active {
    box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.3);
    transform: translate(0.1em, 0.1em);
  }

/******************************* TextPresentation ***************************/


#TextPresentation{
    top: 40px;
    position: relative;
    width:92%;
    left:4%;
    overflow:hidden;
    line-height: 2;
    font-size: 115%;
}

.sous_titre_txt{
    font-size: 185%;
}

.para{
    position: relative;
    width: 28.33%;
    float:left;
    margin-left: 3%;
}

.img_tittle{
    position: relative;
    height: 40px;
    left: 30px;
}


/******************************* Portraits ***************************/

#portraits{
    top: 25px;
    position: relative;
    left:4%;
    width: 92%;
    font-size:115%;
}

#sous_titre_portraits{
    position: relative;
    left: 3%;
    font-size: 185%;
}

.photo{
    position: relative;
    width: 28.66%;
    margin-left: 3%;
    border: solid 8px white;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

.photo:hover{
    opacity: 0.5;
    border: solid 1px #aaa;
}

.prenom_haut{
    position:absolute;
    top: 13%;
    left: 3%;
    width: 10%;
    z-index:1;
    font-size:200%;
    opacity: 0;
    background:rgba(112,128,144, 0.3);
    border-top-right-radius:10px;
}

.prenom_bas{
    position:absolute;
    top: 60%;
    left: 3%;
    width: 14%;
    z-index:1;
    font-size:200%;
    background:rgba(112,128,144, 0.3);
    opacity: 0;
    border-top-right-radius:10px;
}


#prenom_pierre{
    left:34.66%;
}


#prenom_ronan{
    left: 66.32%;
}

#prenom_liam{
    left:34.66%;
}


#prenom_baz{
    left: 66.32%;
}

.nom_haut{
    position:absolute;
    top: 30%;
    width: 18%;
    z-index:1;
    right:5%;
    font-size:200%;
    opacity: 0;
    background:rgba(112,128,144, 0.3);
    border-bottom-left-radius:10px;
}

.nom_bas{
    position:absolute;
    bottom: 6%;
    width: 12%;
    z-index:1;
    right:5%;
    font-size:200%;
    opacity: 0;
    background:rgba(112,128,144, 0.3);
    border-bottom-left-radius:10px;
}

#stay_fixed{
    position:fixed;
    color: red;
}

#nom_pierre{
    right:36.66%;
}


#nom_felix{
    right: 68.32%;
}

#nom_liam{
    right:36.66%;
}


#nom_sacco{
    right: 68.32%;
}

.photo:hover ~ .prenom_haut{
    opacity: 1;
}

.photo:hover ~ .nom_haut{
    opacity: 1;
}

.photo:hover ~ .prenom_bas{
    opacity: 1;
}

.photo:hover ~ .nom_bas{
    opacity: 1;
}

.linkedin_haut{
    position: absolute;
    opacity: 0;
    width: 28.66%;
    z-index:1;
    left:3%;
    text-align: center;
    top:46%;
}



#linkedin_pierre{
    left:34.66%;
}

#linkedin_liam{
    left:34.66%;
}

#linkedin_ronan{
    left:66.32%;
}

#linkedin_anne_so{
    left:66.32%;
}

.linkedin_bas{
    position: absolute;
    opacity: 0;
    width: 28.66%;
    z-index:1;
    left:3%;
    text-align: center;
    top:93%;
}
.photo:hover ~ .linkedin_haut{
    opacity: 1;
}

.photo:hover ~ .linkedin_bas{
    opacity: 1;
}

/******************************* Confiance ***************************/

#confiance{
    top: 75px;
    position: relative;
    left:4%;
    width: 92%;
    font-size:115%;
}

#sous_titre_confiance{
    position: relative;
    left: 3%;
    font-size: 185%;
}

#para_logo{
    text-align:center;
    line-height: 10;
    letter-spacing: 250px;
}

.logo{
    width: 5%;
}

`

export default HomeStyle