import styled from "styled-components";

const PageStyle = styled.nav`


    position: absolute;
    color: white;
    top: 10%;
    width:100%;
    left: 0;

    animation-duration: 0.5s;
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

      #tittle{
        position: relative;
        font-size: 200%;
        left: 3%;
      }

#bordertoppa{
  position: relative;
        border-top: 4px solid white ;
        width: 80%;
        left: 10%;
        border-radius: 30px;
    }

.red {
  color: #B22222;
}

`

export default PageStyle