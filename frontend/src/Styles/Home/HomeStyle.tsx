import styled from "styled-components";

const HomeStyle = styled.nav`

#all{
    position: relative;
    top: -0px;
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
    z-index: 2;
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
    top: 14vw;
    word-spacing: 50px;
    line-height: 225px;
    animation-delay: 3s;
    animation-duration: 1s;
    animation-name: opa_txt;
    opacity: 0;
    animation-fill-mode: forwards;
}

.fleche{
    position: absolute;
    z-index:1;
    width:7%;
    
    top: 35vw;
    word-spacing: 50px;
    line-height: 225px;
    animation-delay: 4s;
    animation-duration: 1.5s;
    animation-name: opa_fleche;
    opacity: 0;
    animation-iteration-count: 4;
    animation-fill-mode: none;
}

#fleche_droite{
    left:5%;
}

#fleche_gauche{
    right: 5%;
}

@keyframes opa_fleche{
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
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

.but{
    text-align: center;
    position: relative;
    width: 100%;
    top: 40px;
    margin-bottom: 50px;
}

button {
    cursor: pointer;
    position: relative;
    width: 300px;
    font-size: 1.75em;
    padding: 0.7em 1.4em;
    background-color: #BF0426;
    text-decoration: none;
    border: none;
    border-radius: 0.5em;
    color: #DEDEDE;
    box-shadow: 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.3);
  }
  
.but button::before {
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
  
 .but button:hover::before {
    width: 1.6em;
    height: 1.6em;
  }
  
.but button:active {
    box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.3);
    transform: translate(0.1em, 0.1em);
  }

#nous .lien{
    text-decoration: none;
    font-size: 110%;
    text-decoration: underline;
    text-decoration-color: #B22222;
  }

/******************************* TextPresentation ***************************/

.sous_titre_txt{
    font-size: 185%;
}

.TextPresentation{
    top: 40px;
    position: relative;
    line-height: 2;
    font-size: 115%;
    margin-bottom: 50px;
}

.TextPresentation .grille{
    position: relative;
    width: 99%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 29vw));
    justify-content: center;
    grid-gap: 15px;
}
.TextPresentation  .grid_item{
    width: 29vw;
    min-width: 300px;
    
}




/******************************* Portraits ***************************/




#sous_titre_portraits{
    position: relative;
    left: 5%;
    width: 90%;
    font-size: 185%;
}

.equipe{
    position: relative;
    top : 50px;
    font-size: 115%;
    margin-bottom: 50px;
    
}


.equipe .grille{
    position: relative;
    width: 99%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 29vw));
    justify-content: center;
    grid-gap: 15px;
    
}

.equipe .grid_item{
    width: 29vw;
    min-width: 170px;
}

.equipe .photo{
    border: solid 8px white;
    box-sizing: border-box;
    width: 29vw;
    min-width: 180px;   
}

.equipe .nom{
    position: absolute;
    top: 25%;
    font-size: 2vw;
    width: 50%;
    background:rgba(112,128,144, 0.3);
    padding-left: 1vw;
    border-top-right-radius:10px;
    opacity: 0;
    font-family: "Chivo";
}

.equipe .fonction{
    position: absolute;
    right: 0px;
    top: 50%;
    padding-right: 1vw;
    font-size: 2vw;
    width: 55%;
    background:rgba(112,128,144, 0.3);
    border-bottom-left-radius:10px;
    opacity: 0;
    font-family: "Chivo";
}

.card .linkedin{
    position: absolute;
    bottom: 5px;
    width: 100%;
    text-align: center;
    opacity: 0;
}


.card:hover .photo{
    opacity: 0.3;
}

.card:hover .linkedin{
    opacity: 1;
}
.card:hover .nom{
    opacity: 1;
}
.card:hover .fonction{
    opacity: 1;
}


/******************************* Parlent ***************************/

#parlent{
    top: 75px;
    position: relative;
    left:4%;
    width: 92%;
    font-size:115%;
    margin-bottom: 75px;
}

#sous_titre_parlent{
    position: relative;
    left: 1%;
    font-size: 185%;
}

#para_logo{
    text-align:center;
    line-height: 10;
    letter-spacing: 200px;
}

.logo{
    width: max(60px, 5vw);
}

/******************************* Confiance ***************************/

#confiance{
    top: 75px;
    position: relative;
    left:4%;
    width: 92%;
    font-size:115%;
    margin-bottom: 75px;
}

#sous_titre_parlent{
    position: relative;
    left: 1%;
    font-size: 185%;
}

`

export default HomeStyle