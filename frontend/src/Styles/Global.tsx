import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
html,body  
{  
overflow-x:hidden;  
}  
@font-face {
    font-family: optima;
    src: url('./Montserrat/Montserrat-VariableFont_wght.ttf') format('ttf')
    font-weight: normal;
    font-style: normal;
}

h1 {
    font-family: "Chivo";
    
}

h2{
    font-family: Roboto;
 }
 div{
    font-family: Inter;
    font-weight: 300;
 }


.red {
    color: #B22222;
  }

.trait_horizontal_top{
        position : absolute;
        border-top: 4px solid #B22222;
        width: 70px;
        top: -30px;
        left: -25px;
        z-index: 1;
 }

 .trait_vertical_top{
    position : absolute;
        border-top: 70px solid #B22222;
        width: 4px;
        left: -25px;
        top: -30px;
        z-index: 1;
}

.trait_horizontal_bot{
    position : relative;
    border-bottom: 4px solid #B22222;
    width: 70px;
    z-index: 1;
    top: 50px;
    left: 20px;
    float: right;
}
.trait_vertical_bot{
    position : relative;
    border-bottom: 70px solid #B22222;
    width: 4px;
    z-index: 1;
    top: -20px;
    left: 90px;
    float: right;
}

`

export default GlobalStyle