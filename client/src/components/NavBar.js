'use strict';

import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/constants";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";


const NavBar = observer(() => {
  const {user} = useContext(Context);
  const {history} = useHistory();

  return (
    <>
      <br/>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Adolf`s House</NavLink>
          {user.isAuth ?
            <Nav className="ml-auto" style={{color: 'white'}}>
              <Button
                variant={'outline-light'}
                onClick={() => history.push(ADMIN_ROUTE)}
              >
                Admin
              </Button>
              <Button
                variant={'outline-light'}
                onClick={() => history.push(LOGIN_ROUTE)}
                className="ms-lg-2"
              >
                Sign out
              </Button>
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
