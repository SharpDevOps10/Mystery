'use strict';

import React from 'react';
import {Button, Card, Container, Form, NavLink, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/constants";
import {useLocation} from "react-router-dom";

const Auth = () => {

  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;


  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">
          { isLogin
            ? "Authorization"
            : "Registration"
          }
        </h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-2"
            placeholder="Enter your email"
          />
          <Form.Control
            className="mt-2"
            placeholder="Enter your password"
          />
        </Form>
        <Row className="d-flex justify-content-between mt-3 pl-3">
          { isLogin ?
            <div style={{display: 'inline-flex'}}>
            No account?<NavLink to={REGISTRATION_ROUTE}> Please, Register!</NavLink>
          </div>
            : <div style={{display: 'inline-flex'}}>
              Have account yet?<NavLink to={LOGIN_ROUTE}> Please, Sign In!</NavLink>
            </div>
          }
          <Button variant={"outline-success"}>
            { isLogin ? "Sign In"
              : "Registration"

            }
          </Button>
        </Row>
      </Card>
    </Container>
  );
};

export default Auth;
