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

const Card = () => (
  <div className='card'>
    <img className="picture" src={require('../../assets/fiction1.jpg')} alt="mariage" />
  </div>
);

const Carousel = ({children}:any) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel'>
      {active < count - 1 && <button className='nav left' onClick={() => {setActive(active + 1);
}}
            ><TiChevronLeftOutline/></button>}
      {React.Children.map(children, (child, i) => (
        <div
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
      {active > 0 && <button className='nav right' onClick={() => setActive(i => i - 1)}><TiChevronRightOutline/></button>}
    </div>
  );
};

const AllCarrousel = () => (
  <div className='allCarroussel'>
    <Carousel>
      {[...new Array(CARDS)].map((_, i) => (
        <Card />
      ))}
    </Carousel>
  </div>
);

export default AllCarrousel