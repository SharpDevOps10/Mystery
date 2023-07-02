import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Range = ({ setRange, value, setValue }) => {
  return (
    <>
      <Form.Label>Оценить</Form.Label>
      <Form.Range
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min={0}
        max={5}
      />
      <p>{value}</p>
      <Button onClick={() => setRange(value)}> Please, rate it!</Button>
    </>
  );
};
export default Range;
