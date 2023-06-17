'use strict';

import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/constants";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
  const {user} = useContext(Context);

  return (
    <>
      <br/>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Adolf`s House</NavLink>
          {user.isAuth ?
            <Nav className="ml-auto" style={{color: 'white'}}>
              <Button variant={'outline-light'}>Admin</Button>
              <Button variant={'outline-light'} className="ms-lg-2">Sign in</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color: 'white'}}>
              <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Authorization</Button>
            </Nav>
          }
        </Container>
      </Navbar>

    </>
  );
});

export default NavBar;
