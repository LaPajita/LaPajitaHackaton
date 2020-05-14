import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Opiniones.scss';
import CarouselComponent from './Carousel/CarouselComponent';
import Menu from '../menu/Menu';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faBookmark, faHome, faPowerOff} from '@fortawesome/free-solid-svg-icons';



const Opiniones = () => { 

    
  return (
   
    
    <React.Fragment className='Opiniones'>
      <Menu/>
      <CarouselComponent />
      <div className='container-opiniones'>
        <article>
          <button className='comment-button'>
            DEJAR COMENTARIO
          </button>
        </article>
        <article className='opiniones-card'>
          <img className='avatar' 
              src='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
          <div className='card-body'>
            <div className='user-name'>
              <h3>Laura Álvarez Fernán</h3>
              {/* <div className='rate'>
                
              </div> */}
              <button className="opinion-button">4.2/5</button>
            </div>
            <div className='comment'>
              <p><i>Todo estaba buenísimo, bien de precio. Apenas esperamos... pienso repetir</i></p>
            </div>
          </div>
        </article>

     
        <article className='opiniones-card'>
          <img className='avatar' 
              src='https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
          <div className='card-body'>
            <div className='user-name'>
              <h3>Juan Fernández Pérez</h3>
              {/* <div className='rate'>
                
              </div> */}
              <button className="opinion-button">4.1/5</button>
            </div>
            <div className='comment'>
              <p><i>Nos encantó todo y volveremos. Un sitio muy agradable para divertirse</i></p>
            </div>
          </div>
        </article>

        
        <article className='opiniones-card'>
          <img className='avatar' 
              src='https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
          <div className='card-body'>
            <div className='user-name'>
              <h3>Cristina González</h3>
              {/* <div className='rate'>
                
              </div> */}
              <button className="opinion-button">4.5/5</button>
            </div>
            <div className='comment'>
              <p><i>Todo estaba buenísimo, bien de precio. Apenas esperamos... pienso repetir</i></p>
            </div>
          </div>
        </article>
      </div>

    </React.Fragment>

  )

}
export default Opiniones;