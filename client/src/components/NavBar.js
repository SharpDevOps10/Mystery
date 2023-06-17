'use strict';

import React, {useContext} from 'react';
import {Context} from "../index";
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/constants";

const NavBar = () => {
  const {user} = useContext(Context);

  return (
    <>
      <br/>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Adolf`s House</NavLink>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
};

export default NavBar;
