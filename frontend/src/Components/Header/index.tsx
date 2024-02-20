import { Link, useLocation, } from "react-router-dom";
import HeaderStyle from "../../Styles/Header/HeaderStyle";
import SocialLogo from "./socialLogo";
import useWindowSize from "../../Hook/useScreenSize";
import { useContext, useEffect, useRef, useState } from "react";
import MenuNav from "./MenuNav";
import { LangueContext } from "../../App";
import gsap from "gsap";


function Header(){
    const location = useLocation();
    const checkboxRef = useRef<HTMLInputElement>(null);
    const {langue} = useContext(LangueContext)
    const screenWidth = useWindowSize().width;
    const [isOpen, UseIsOpen] = useState(0);

    const smallBallRef = useRef<HTMLDivElement>(null)
    const bigBallRef = useRef<HTMLDivElement>(null)

    const refHeader = useRef<HTMLDivElement>(null)
    const listLink = document.getElementsByClassName('link')



    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (refHeader.current && smallBallRef.current && bigBallRef.current) {
                gsap.to(smallBallRef.current, { x: e.clientX - 5, y: e.clientY - 10, delay: 0 });
                gsap.to(bigBallRef.current, { x: e.clientX - 15, y: e.clientY - 15, delay: 0.1 });
                smallBallRef.current.style.display = 'block';
                bigBallRef.current.style.display = 'block';
                refHeader.current.style.cursor = 'none';
            }
        };
    
        const handleMouseLeaveHeader = () => {
            if (smallBallRef.current && bigBallRef.current) {
                smallBallRef.current.style.display = 'none';
                bigBallRef.current.style.display = 'none';
            }
        };
    
        const handleMouseEnterLink = (e: MouseEvent) => {
            if (bigBallRef.current) {
                gsap.to(bigBallRef.current, { scale: 2.5, duration: 0.3 });
            }
        };
    
        const handleMouseLeaveLink = (e: MouseEvent) => {
            if (bigBallRef.current) {
                gsap.to(bigBallRef.current, { scale: 1, duration: 0.3 });
            }
        };
    
        refHeader.current?.addEventListener('mousemove', handleMouseMove);
        refHeader.current?.addEventListener('mouseleave', handleMouseLeaveHeader);
    
        for (let i = 0; i < listLink.length; i++) {
            const element = listLink[i] as HTMLElement;
            element.addEventListener('mouseenter', handleMouseEnterLink);
            element.addEventListener('mouseleave', handleMouseLeaveLink);
            element.style.cursor = 'none';
        }
    
        return () => {
            refHeader.current?.removeEventListener('mousemove', handleMouseMove);
            refHeader.current?.removeEventListener('mouseleave', handleMouseLeaveHeader);
    
            for (let i = 0; i < listLink.length; i++) {
                const element = listLink[i] as HTMLElement;
                element.removeEventListener('mouseenter', handleMouseEnterLink);
                element.removeEventListener('mouseleave', handleMouseLeaveLink);
            }
        };
    }, [listLink]);
    
    



  useEffect(() => {
    if (checkboxRef.current && checkboxRef.current.checked === true && isOpen === 0) {
      checkboxRef.current.checked = false;
    }
  }, [isOpen]);


    useEffect(() => {if (checkboxRef.current && checkboxRef.current.checked === true && isOpen === 0){
        checkboxRef.current.checked = false;
    }}, [isOpen])

    if( screenWidth === undefined || screenWidth <= 900){
        return ( 
            <HeaderStyle loca={location.pathname}>
            <div id="little_screen">
                <div  className="button_menu"><input type="checkbox" ref={checkboxRef} id="checkbox" />
                    <label  onClick={() => isOpen === 1 ? UseIsOpen(0) : UseIsOpen(1)} htmlFor="checkbox" className="toggle">
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                    </label>
                </div>
                <Link className="link_logo" id="Home"to="/"><img id="logo" src={require('../../assets/logo/logo_vva_blanc.png')} alt="logo_vva_blanc" /></Link>
                <SocialLogo /> 
               
               
            </div>
            {isOpen === 1 ? <MenuNav PropUseIsOpen={UseIsOpen}/> : ""}
            </HeaderStyle>
        )
    } else {
    return (
        <HeaderStyle loca={location.pathname}>
        <div   className="cursor">
            <div ref={bigBallRef} className="cursor__ball cursor__ball--big ">
                <svg height="30" width="30">
                    <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
            </svg>
        </div>
            <div ref={smallBallRef} className="cursor__ball cursor__ball--small">
                <svg height="10" width="10">
                    <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
                </svg>
            </div>
        </div>
            <div ref={refHeader} id="big_screen">
            <Link className="link_logo" id="Home"to="/"><img id="logo" src={require('../../assets/logo/logo_vva_blanc.png')} alt="logo_vva_blanc" /></Link>
            {langue == 'fr' ?
                <nav className="links">
                    <h2><Link className="link" id="Home"to="/">Accueil</Link><span> </span>
                    <Link className="link" id="Service" to="/service">Services</Link><span> </span>
                    <Link key={2} className="link" id="RealPerso" to="/realperso">Réalisations</Link><span> </span>
                    <Link key={3} className="link" id="Dons" to="/don">Dons</Link><span> </span>
                    <Link key={4} className="link" id="Contact" to="/contact">Contact</Link></h2>
                </nav>
                :

                <nav className="links">
                    <h2><Link  className="link" id="Home"to="/">Home</Link><span> </span>
                    <Link  className="link" id="Service" to="/service">Services</Link><span> </span>
                    <Link  className="link" id="RealPerso" to="/realperso">Real</Link><span> </span>
                    <Link  className="link" id="Dons" to="/don">Donation</Link><span> </span>
                    <Link  className="link" id="Contact" to="/contact">Contact</Link></h2>
                </nav>}
                <SocialLogo />
            </div>
            
        </HeaderStyle>
    )
}}

export default Header

