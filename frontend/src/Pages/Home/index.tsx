import Confiance from "../../Components/Home/Confiance";
import TextPresentation from "../../Components/Home/TextPresentation";
import Video from "../../Components/Home/Video";
import HomeStyle from "../../Styles/Home/HomeStyle";
import gsap from 'gsap'
import { ScrollToPlugin} from 'gsap/ScrollToPlugin'
import { ScrollTrigger} from 'gsap/ScrollTrigger'
import { useEffect} from 'react'
import Nous from "../../Components/Home/nous";
import Equipe from "../../Components/Home/Equipe";
import Parlent from "../../Components/Home/Parlent";

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
                start: "top",
                end: "center",
            }
        }
    )
}



function Home(){
    

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
            <Parlent />
            <div className="border"/>
            <Confiance />
        </div>
        </HomeStyle>
        
    )
}

export default Home