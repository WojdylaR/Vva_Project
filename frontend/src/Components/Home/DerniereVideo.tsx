import { useRef, useState } from "react";
import styled from "styled-components"

export default function DerniereVideo(){
    const refIframe = useRef<HTMLIFrameElement>(null)
    const [width, setWidth] = useState("50%");
    const [height, setHeight] = useState("0px");

    function onLoad() {
        if (!refIframe.current || !refIframe.current.contentWindow) {
            return;
        }
        const iframeWidth = refIframe.current.offsetWidth;
        console.log(iframeWidth)
        const calculatedHeight = `${iframeWidth / (16 / 9)}px`; // Ratio 16:9 pour les vidéos YouTube
        setWidth(iframeWidth.toString());
        setHeight(calculatedHeight);
    }

    return(
        <DerniereVideoStyle>
            <h1>Notre dernière vidéo:</h1>
            <h2>Colère des Agriculteurs - Comprendre la filière Agricole</h2>
            <iframe onLoad={onLoad} ref={refIframe} width="40%" height={height} src="https://www.youtube.com/embed/qChaLL-NhDQ?si=XgDPli4Mb1T-LqSN" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </DerniereVideoStyle>
    )
}

const DerniereVideoStyle = styled.div`
    position: relative;
    text-align: center;
    top: 50px;  
    display: flex;
    width: 100vw;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;

    h2{
        font-size: 17px;
        margin-bottom: 30px;
        font-family:Chivo;
        font-weight: 200;
    }


    h1{
        font-size: 25px;
        margin: 20px;
    }

    iframe{
        min-width: 350px;
        min-height: 196px;
    }


`

