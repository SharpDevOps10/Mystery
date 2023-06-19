import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/black-star-transparent-3.png';

const DeviceItem = ({device}) => {
  return (
    <Col md={3}>
      <Card style={{width: 150, cursor: 'pointer'}} border='light'>
        <Image src={device.img} width={150} height={150}></Image>
        <div className="text-black-50 mt-1 d-flex justify-content-between align-self-center">
          <div>
            ASSus
          </div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star}></Image>
          </div>
        </div>
        <div>
          {device.name}
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
