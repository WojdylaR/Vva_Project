import React from "react";
import Footer from "../../Components/Footer";
import TextPresentation from "../../Components/Home/TextPresentation";
import Video from "../../Components/Home/Video";
import HomeStyle from "../../Styles/Home/HomeStyle";

function Home(){
    return (
        <HomeStyle>
        <div id="all">
            <Video />
            <TextPresentation />
        </div>
        </HomeStyle>
        
    )
}

export default Home