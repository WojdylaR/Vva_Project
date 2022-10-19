import styled from 'styled-components'

const HeaderStyle = styled.nav`
div{
    background: black;
    color: white;
    position:absolute;
    top: 0;
    height: 10%;
    width: 100%;
    left: 0;
    font-size:120%;
}

.img{
position: absolute;
height:100%;
}

.links{
    position: absolute;
    top: 40%;
    width: 100%;
    text-align: center;
    word-spacing: 100px;
}

.link{
    
    text-decoration:none;
    color: white;
}

.link:hover{
    text-decoration: underline;
}
.link:active{
    color: grey;
}



`

export default HeaderStyle