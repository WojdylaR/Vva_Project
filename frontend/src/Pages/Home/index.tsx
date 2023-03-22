import React from "react";
import Footer from "../../Components/Footer";
import Confiance from "../../Components/Home/Confiance";
import TextPresentation from "../../Components/Home/TextPresentation";
import Video from "../../Components/Home/Video";
import HomeStyle from "../../Styles/Home/HomeStyle";
import gsap from 'gsap'
import { ScrollToPlugin} from 'gsap/ScrollToPlugin'
import { ScrollTrigger} from 'gsap/ScrollTrigger'
import { useEffect, useRef} from 'react'
import Nous from "../../Components/Home/nous";
import Equipe from "../../Components/Home/Equipe";

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
        slideInTop("#nous", 0.25, 1);
        slideInTop("sous_titre", 0.25, 1);
        slideInTop(".border", 0.25, 1);
        slideInTop("sous_titre_txt", 0.25, 1);
        slideInTop(".equipe", 0, 3);
        slideInTop("#confiance", 0.25, 1)
    }, [])

    return (
        <HomeStyle>
        <div id="all">
            <Video />
            <div className="border" />
            <Nous />
            <div className="border"/>
            <TextPresentation />
            <div className="border" />
            <Equipe />
            <div className="border"/>
            <Confiance />
        </div>
        </HomeStyle>
        
    )
}

export default Home