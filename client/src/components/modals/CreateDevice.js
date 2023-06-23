import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../../index';
import { fetchBrands, fetchTypes } from '../../http/deviceAPI';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({ show, onHide }) => {
  const [info, setInfo] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [brand, setBrand] = useState(null);
  const [type, setType] = useState(null);
  const { device } = useContext(Context);
  const addProperty = () => {
    setInfo([
      ...info,
      {
        title: '',
        description: '',
        number: Date.now(),
      },
    ]);
  };

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

  const removeProperty = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const addDevice = () => {};

  const selectFile = (event) => {
    setFile(event.target.files[0]);
  };
  return (
    <Modal show={show} size="lg" onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {device.selectedType.name || 'Choose type'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle>
              {device.selectedBrand.name || 'Choose brand'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((brand) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-3"
            placeholder="Enter device`s name"
          />
          <Form.Control
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
            className="mt-3"
            placeholder="Enter device`s price"
            type="number"
          />
          <Form.Control className="mt-3" type="file" onChange={selectFile} />
          <hr />
          <Button variant="outline-dark" onClick={addProperty}>
            Add new property
          </Button>
          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(event) =>
                    changeInfo('title', event.target.value, i.number)
                  }
                  placeholder="Enter property`s name"
                />
              </Col>

              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(event) =>
                    changeInfo('description', event.target.value, i.number)
                  }
                  placeholder="Enter property`s description"
                />
              </Col>

              <Col md={4}>
                <Button
                  variant={'outline-danger'}
                  onClick={() => removeProperty(i.number)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>
          Close
        </Button>
        <Button variant={'outline-success'} onClick={addDevice}>
          Upload
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
