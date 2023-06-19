'use strict';

import React from 'react';
import {Button, Container, Modal} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
  return (
    <Container className="d-flex flex-column">
      <Button variant={"outline-dark"} className="mt-4 p-2">Add type</Button>
      <Button variant={"outline-dark"} className="mt-4 p-2">Add brand</Button>
      <Button variant={"outline-dark"} className="mt-4 p-2">Add device</Button>
      <CreateBrand/>
      <CreateType/>
      <CreateDevice></CreateDevice>
    </Container>
  );
};

export default Admin;
