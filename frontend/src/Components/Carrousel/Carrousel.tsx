import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'react-icons/ti';
import { CSSProperties } from 'react';
import '../../Styles/Carrousel/CarrouselStyle.scss'

interface CustomCSSProperties extends CSSProperties {
  '--offset'?: any;
  '--direction': any;
  '--abs-offset': any;
  '--active': any;
  'pointer-events': any,
  'opacity': any,
  'display': any,
}

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({title}: any, {content}:any) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Carousel = ({children}:any) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => {setActive(active - 1);
}}
            ><TiChevronLeftOutline/></button>}
      {React.Children.map(children, (child, i) => (
        <div
        key={i}
        className="card-container"
        style={{
          '--direction': i - active,
          '--abs-offset': Math.abs(i - active),
          '--active': i === active ? 1 : 0,
          '--offset': i - active,
          'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block', // <-- ajout de la propriété "--offset"
        } as CustomCSSProperties} // <-- spécification du type "CustomCSSProperties"
      >
          {console.log(i === active ? 1 : 0)}
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
    </div>
  );
};

const AllCarrousel = () => (
  <div className='allCarroussel'>
    <Carousel>
      {[...new Array(CARDS)].map((_, i) => (
        <Card title={'Card ' + (i + 1)} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
      ))}
    </Carousel>
  </div>
);

export default AllCarrousel