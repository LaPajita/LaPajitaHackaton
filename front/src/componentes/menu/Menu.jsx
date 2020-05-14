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
import { faHeart, faUser, faBookmark, faHome, faPowerOff} from '@fortawesome/free-solid-svg-icons';




const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <div className='Menu list-group'>
      <Navbar id='myNavBar' color="danger" navbar-dark dark sticky-top expand="md">
        <NavbarBrand href="/Home">
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
              <NavLink href="/Home"><FontAwesomeIcon icon={faHome} /> Home  </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/usuario"><FontAwesomeIcon icon={faUser} /> Mi Perfil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/reservas"> <FontAwesomeIcon icon={faBookmark} /> Mis Reservas  </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/favoritos"><FontAwesomeIcon icon={faHeart} /> Mis Favoritos  </NavLink>
            </NavItem>
            <NavItem id='logout'>
            <NavLink href="/"><FontAwesomeIcon icon={faPowerOff} /> Log out</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
