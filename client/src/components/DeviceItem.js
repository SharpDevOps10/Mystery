import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/black-star-transparent-3.png';

const DeviceItem = ({device}) => {
  return (
    <Col md={3}>
      <Card style={{width: 150, cursor: 'pointer'}} border='light'>
        <Image src={device.img} width={150} height={150}></Image>
        <div className="d-flex justify-content-between align-self-center">Samsung</div>
        <Image src={star}></Image>


      </Card>
    </Col>
  );
};

export default DeviceItem;
