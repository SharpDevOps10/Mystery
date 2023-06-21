'use strict';

import React, { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

const Device = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);
  return (
    <Container>
      <Col md={4}></Col>
      <Col md={4}></Col>
      <Col md={4}></Col>
    </Container>
  );
};

export default Device;
