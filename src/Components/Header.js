import React, { useState } from 'react';
import { Collapse, Button, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand className='text-light' href="/">Risk Legacy Helper</NavbarBrand>
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
            <NavItem className='m-2'>
            <NavLink>
              <Button href='/rooms'>
                <h6>Room: XXXX</h6>
              </Button>
            </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div >
  );
}

export default Header;
