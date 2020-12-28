import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice, faChessPawn, faGlobeAmericas, faCog, faRocket } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand className='text-light' href="/">Risk Companion</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className='mx-2 text-light'>New Game</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                  <FontAwesomeIcon className='mx-2 fa-3x text-light' icon={faDice}/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                  <FontAwesomeIcon className='mx-2 fa-3x text-light' icon={faChessPawn}/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                  <FontAwesomeIcon className='mx-2 fa-3x text-light' icon={faGlobeAmericas}/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                  <FontAwesomeIcon className='mx-2 fa-3x text-light' icon={faMap}/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                  <FontAwesomeIcon className='mx-2 fa-3x text-light' icon={faCog}/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                  <FontAwesomeIcon className='mx-2 fa-3x text-light' icon={faRocket}/>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
