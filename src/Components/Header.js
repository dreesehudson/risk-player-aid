import React, { useState } from 'react';
import { Collapse, Button, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
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
            <NavItem className='m-2'>
              <NavLink>
                <Button href='/game'>
                  <h6>Play</h6>
                </Button>
              </NavLink>
            </NavItem>
            <NavItem className='m-2'>
              <NavLink>
                <Button href='/setup'>
                  <h6>New Game</h6>
                </Button>
              </NavLink>
            </NavItem>
            <NavItem className='m-2'>
              <NavLink>
                <Button href='/unlockables'>
                  <h6>Unlockables</h6>
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
