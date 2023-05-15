import React, { useEffect, useState } from "react";
import { CSSProperties } from "styled-components"
import '../../Styles/RealPerso/CarousselStyle.scss'
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import useWindowSize from "../../Hook/useScreenSize";

interface CustomCSSProperties extends CSSProperties{
    '--active':any;
}

const Card = (props:any) => (
    <span className="card">
        <a target="_blank" rel="noreferrer" href={'https://www.youtube.com/watch?v=' + props.yt}><img alt="minia_video" src={require(`../../assets/real_perso/${props.minia}`)} /></a>
    </span>
)

const Caroussel = ({children}:any) =>{

    const screenWidth= useWindowSize().width
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(screenWidth && screenWidth > 1700 ? 4 : screenWidth && screenWidth > 1250 ? 3 : screenWidth && screenWidth > 800 ? 2 : 1);
    const count = React.Children.count(children);
    
    useEffect(() => {
        setMax(screenWidth && screenWidth > 1700 ? 4 : screenWidth && screenWidth > 1250 ? 3 : screenWidth && screenWidth > 800 ? 2 : 1)
        return 
    }, [screenWidth])

    return(
        <div className="carousel">
           {max > (screenWidth && screenWidth > 1700 ? 4 : screenWidth && screenWidth > 1250 ? 3 : screenWidth && screenWidth > 800 ? 2 : 1) && <button className='nav left' onClick={()  =>{setMin(min - 1); setMax(max - 1)}}>
        <TiChevronLeftOutline/>
        </button>}
            {React.Children.map(children, (child, i) => (
                <span className="card-container" style={{'--active': i > min && i <= max ? 1 : 0} as CustomCSSProperties}>
                    {i >= min && i < max ? child : ""}
                </span>
            ))}
            {max < count  && <button className='nav right' onClick={()  =>{setMin(min + 1); setMax(max + 1)}}><TiChevronRightOutline/></button>}
        </div>
    )
}

function AllCarousel(props:any){
    const tab={}
    return(
        <div>
            
            <Caroussel >
                {[...new Array(props.nbr_vid)].map((_,i)=>(
                    <Card minia={props.minia[i]} yt={props.yt[i]}/>
                ))}
            </Caroussel>
        </div>
    )
}

export default AllCarousel