import styled from "styled-components"

export default function DerniereVideo(){
    return(
        <DerniereVideoStyle>
            <h2>Notre dernière vidéo :</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qChaLL-NhDQ?si=XgDPli4Mb1T-LqSN" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </DerniereVideoStyle>
    )
}

const DerniereVideoStyle = styled.div`
    position: relative;
    top: 50px;
    display: flex;
    width: 100vw;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;

`

