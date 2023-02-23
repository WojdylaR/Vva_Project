import React, {useState, ReactDOM, useEffect, useContext} from 'react';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'react-icons/ti';
import CarrouselStyle from '../../Styles/Carrousel/CarrouselStyle';
import interfaceCarrousel from './interfaceCarrousel';
import { carrouselContext } from '../../Utils/context/carrouselContext';
import InterfaceCarrousel from './interfaceCarrousel';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({title}:any, {content}:any) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);


const Carousel = ({children}:any) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  const contextCarrousel = useContext(carrouselContext)
  
  
  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => {setActive(active - 1)}}><TiChevronLeftOutline/></button>}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            }}>
              {i === active ? contextCarrousel.setActive2(1) : contextCarrousel.setActive2(3)}
              {console.log("active = " + active + " i = " + i + " active2 = " + contextCarrousel.active2)}
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
    </div>
  );
};
function AllCarrousel (){
    const [carrouselState, setCarrouselState] = useState<interfaceCarrousel>()
    const [active2, setActive2] = useState(2)
    const [test, setTest] = useState("green")
    const contextCarrousel = {
      active2: active2,
      setActive2: setActive2
    }

  return(
  <div className='app'>
    <carrouselContext.Provider value={contextCarrousel}>
    <CarrouselStyle active={active2}>
    <Carousel>
      {[...new Array(CARDS)].map((_, i) => (
        <Card title={'Card ' + (i + 1)} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
      ))}
    </Carousel>
    </CarrouselStyle>
    </carrouselContext.Provider>
  </div>
)}

export default AllCarrousel