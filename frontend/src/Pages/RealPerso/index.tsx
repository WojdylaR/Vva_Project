import React from "react";
import Footer from "../../Components/Footer";
import RealPersostyle from "../../Styles/RealPerso/RealPersostyle";
import YoutubeEmbed from "../../Components/RealPerso/YoutubeEmbed";

function RealPerso(){

    interface VideoInfo{
        url: string;
        width: number;
        height: number;
    }

    const video1:VideoInfo = {
        url:"xMgrlOwA0II",
        width: 857,
        height: 480
    }

    const video2:VideoInfo = {
        url:"ldtu-tBBwNw",
        width: 857,
        height: 480
    }

    return (
        <RealPersostyle>
        <div id="realperso">
            <p id="video">
                <YoutubeEmbed url={video1.url} width={video1.width}/>
                <YoutubeEmbed url={video2.url} width={video2.width}/>
            </p>
        </div>
        </RealPersostyle>
    )
}

export default RealPerso