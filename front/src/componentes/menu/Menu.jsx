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




const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <div className='Menu'>
      <Navbar id='myNavBar' color="danger" navbar-dark dark sticky-top expand="md">
        <NavbarBrand href="/">
          <img className='logo'
            src='https://s6.gifyu.com/images/logo-blanco-lapajita.png'
            alt='logo La Pajita'
            width='100px'
            height='auto' />
        </NavbarBrand>
        <NavbarToggler id='myToggler' onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className='white'>
          <Nav className="ml-auto super" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Mi Perfil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Mis Reservas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Mis Favoritos</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;