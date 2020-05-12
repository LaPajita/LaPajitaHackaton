import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Menu.scss';
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
import { faHeart, faUser, faBookmark, faHome} from '@fortawesome/free-solid-svg-icons';




const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <div className='Menu list-group'>
      <Navbar id='myNavBar' color="danger" navbar-dark dark sticky-top expand="md">
        <NavbarBrand href="/">
          <img className='logo'
          src='https://s6.gifyu.com/images/logo-blanco-lapajita.png'
          alt='logo La Pajita'
          width= '100px'
          height='auto' />
        </NavbarBrand>
        <NavbarToggler id='myToggler' onClick={toggle} />
        <Collapse  isOpen={isOpen} navbar className='white'>
          <Nav className="ml-auto super" navbar>
            <NavItem>
              <NavLink href="/components/">Home  <FontAwesomeIcon icon={faHome} /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Mi Perfil  <FontAwesomeIcon icon={faUser} /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Mis Reservas  <FontAwesomeIcon icon={faBookmark} /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Mis Favoritos  <FontAwesomeIcon icon={faHeart} /></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
