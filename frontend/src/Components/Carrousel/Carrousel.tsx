import React, {useState} from 'react';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'react-icons/ti';
import { CSSProperties } from 'react';
import '../../Styles/Carrousel/CarrouselStyle.scss'
import interfaceCarrousel from './interfaceCarrousel';

interface CustomCSSProperties extends CSSProperties {
  '--offset'?: any;
  '--direction': any;
  '--abs-offset': any;
  '--active': any;
  'pointer-events': any,
  'opacity': any,
  'display': any,
}

const CARDS = 5;
const MAX_VISIBILITY = 3;

const Card = (props:any) => (
  
  <div className='card'>
    <img className="picture"  src={require(`../../assets/pic_service/${props.picture}`)} alt="mariage" />
    
  </div>
);

const Carousel = ({children}:any) => {
  const [active, setActive] = useState(3);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel'>
      {active < count - 1 && <button className='nav left' onClick={() => {setActive(active + 1);}}>
        <TiChevronLeftOutline/>
        </button>}
      {React.Children.map(children, (child, i) => (
        <div
        className="card-container"
        style={{
          '--active': i === active ? 1 : 0,
            
        } as CustomCSSProperties}
      >
          {i === active ? child : ""}
        </div>
      ))}
      {active > 1 && <button className='nav right' onClick={() => setActive(i => i - 1)}><TiChevronRightOutline/></button>}
    </div>
  );
};

const AllCarrousel = (props: any) => {

  return(
  <div className="allCarroussel">
    <Carousel>
      {[...new Array(CARDS)].map((_, i) => (
        <Card picture={props.picture[i]}/>
      ))}
    </Carousel>
  </div>
)};

export default AllCarrousel