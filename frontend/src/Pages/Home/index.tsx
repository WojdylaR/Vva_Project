import React from "react";
import Footer from "../../Components/Footer";
import Portraits from "../../Components/Home/Portraits";
import TextPresentation from "../../Components/Home/TextPresentation";
import Video from "../../Components/Home/Video";
import HomeStyle from "../../Styles/Home/HomeStyle";

function Home(){
    return (
        <HomeStyle>
        <div id="all">
            <Video />
            <div className="border" />
            <TextPresentation />
            <div className="border" />
            <Portraits />
        </div>
        </HomeStyle>
        
    )
}

export default Home