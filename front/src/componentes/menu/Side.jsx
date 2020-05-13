import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Menu.scss';
import { slide as Menu } from 'react-burger-menu'
 
export default class Side extends React.Component {
  showSettings (event) {
    event.preventDefault();
   
  }
 
  render () {
    
    return (
      <Menu className='Menu'>
        <a id="home" className="menu-item nav-item" href="/">Home</a>
        <a id="" className="menu-item nav-item" href="/">Mi Perfil</a>
        <a id="" className="menu-item nav-item" href="/">Mis Reservas</a>
        <a id="" className="menu-item nav-item" href="/">Mis Favoritos</a>
      </Menu>
    );
  }
}

