import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`



@font-face {
    font-family: 'Montserrat';
    src: url('./Montserrat/Montserrat-VariableFont_wght.ttf') format('ttf')
    font-weight: normal;
    font-style: normal;
}

div {
    font-family: Montserrat, sans-serif;
}

`

export default GlobalStyle