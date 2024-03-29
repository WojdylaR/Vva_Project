import styled from "styled-components";

const ButtonStyle = styled.div`
    position: fixed;
    top: 80%;
    right: 5%;
    z-index: 3;

    button {
        display: inline-block;
        border-radius: 4px;
        background-color: white;
        border: none;
        color: black;
        text-align: center;
        font-size: 13px;
        padding: 16px;
        width: 160px;
        transition: all 0.5s;
        cursor: pointer;
        margin: 5px;
        font-weight: 700;
       }

button span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
       }
       
       button span:after {
        content: '»';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -15px;
        transition: 0.5s;
       }
       
       button:hover span {
        padding-right: 15px;
       }
       
       button:hover span:after {
        opacity: 1;
        right: 0;
       }
       `

export default ButtonStyle
