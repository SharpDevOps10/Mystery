import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show, onHide}) => {
  const [info, setInfo] = useState([]);
  const {device} = useContext(Context);
  const addProperty = () => {
    setInfo([...info, {
      title: '',
      description: '',
      number: Date.now()
    }]);
  };

  const removeProperty = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  return (
    <Modal
      show={show}
      size="lg"
      onHide={onHide}

      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Choose type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) =>
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((brand) =>
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            placeholder="Enter device`s name"
          />
          <Form.Control
            className="mt-3"
            placeholder="Enter device`s price"
            type="number"
          />
          <Form.Control
            className="mt-3"
            type="file"
          />
          <hr/>
          <Button
            variant="outline-dark"
            onClick={addProperty}
          >
            Add new property
          </Button>
          {info.map((i) =>
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  placeholder="Enter property`s name"

                />
              </Col>

              <Col md={4}>
                <Form.Control
                  placeholder="Enter property`s description"
                />
              </Col>

              <Col md={4}>
                <Button
                  variant={"outline-danger"}
                  onClick={() => removeProperty(i.number)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          )

          }

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
        <Button variant={"outline-success"} onClick={onHide}>Upload</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
