  
import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponent.scss';
import MyContext from '../../../context';

const CarouselComponent = () => {

  // ------CONTEXTO------
  const valueFromContext = useContext(MyContext);
  const state = valueFromContext.hooksState
  const setStateContext = valueFromContext.setHooksState;
  const imagenesSeparadas = state.bares.map(bar => bar.photos.split(','));

  // console.log(state.selectedBar)

  return (
    <Carousel>
      {
        imagenesSeparadas && imagenesSeparadas.map((img, index) =>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imagenesSeparadas[state.selectedBar || 0][index]}
              alt="First slide"
            />
          </Carousel.Item>
        )}
    </Carousel>
  );
}

export default CarouselComponent;
