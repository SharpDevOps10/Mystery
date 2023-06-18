'use strict';

import React from 'react';
import {Button, Card, Container, Form, NavLink, Row} from "react-bootstrap";
import {REGISTRATION_ROUTE} from "../utils/constants";

const Auth = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">
          Authorization
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
        <Row>
          <div>
            There is no account? <NavLink to={REGISTRATION_ROUTE}>Please, authorize!</NavLink>
          </div>
          <Button
            className="mt-3 align-self-end"
            variant={"outline-success"}>
            Sign In
          </Button>
        </Row>
      </Card>
    </Container>
  );
};

export default Auth;
