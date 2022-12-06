import React from "react";
import Footer from "../../Components/Footer";
import Confiance from "../../Components/Home/Confiance";
import Portraits from "../../Components/Home/Portraits";
import TextPresentation from "../../Components/Home/TextPresentation";
import Video from "../../Components/Home/Video";
import HomeStyle from "../../Styles/Home/HomeStyle";
import gsap from 'gsap'
import { ScrollToPlugin} from 'gsap/ScrollToPlugin'
import { ScrollTrigger} from 'gsap/ScrollTrigger'
import { useEffect, useRef} from 'react'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const slideInTop = (elem:string, delay:number, duration:number) => {
    gsap.fromTo(
        elem,
        {
            opacity: 0,
            
        },
        {
            opacity: 1,
            
            duration: duration,
            delay: delay,
            scrollTrigger:{
                trigger: elem,
                start: "top center",
                end: "bottom center",
            }
        }
    )
}



function Home(){
    useEffect(() => {
        slideInTop("#TextPresentation", 0.25, 1);
        slideInTop("sous_titre", 0.25, 1);
        slideInTop(".border", 0.25, 1);
        slideInTop("sous_titre_txt", 0.25, 1);
        slideInTop("#portraits", 0.25, 1);
        slideInTop("#confiance", 0.25, 1)
    }, [])

    return (
        <HomeStyle>
        <div id="all">
            <Video />
            <div className="border" />
            <TextPresentation />
            <div className="border" />
            <Portraits />
            <div className="border"/>
            <Confiance />
        </div>
        </HomeStyle>
        
    )
}

export default Home