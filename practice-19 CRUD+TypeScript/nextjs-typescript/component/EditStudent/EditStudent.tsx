import { Form, Row, Col, Button } from 'react-bootstrap';

const EditStudent = () => {
  return (
    <Form className='mt-3'>
      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridEmail'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter Name' />
        </Form.Group>
        <Form.Group as={Col} controlId='formGridEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
      </Row>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId=''>
          <Form.Label>Class</Form.Label>
          <Form.Control type='number' placeholder='Enter Class' />
        </Form.Group>
        <Form.Group as={Col} controlId=''>
          <Form.Label>Percentage</Form.Label>
          <Form.Control type='number' placeholder='Enter percentage' />
        </Form.Group>
      </Row>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId=''>
          <Form.Label>Address</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Address'
            style={{ height: '100px' }}
          />
        </Form.Group>
      </Row>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId=''>
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type='number' placeholder='Enter Zip Code' />
        </Form.Group>
        <Form.Group as={Col} controlId=''>
          <Form.Label>City</Form.Label>
          <Form.Select aria-label='City'>
            <option>Select city</option>
            <option value='1'>Rajkot</option>
            <option value='2'>Ahmadabad</option>
            <option value='3'>Mumbai</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId=''>
          <Form.Label>State</Form.Label>
          <Form.Select aria-label='State'>
            <option>Select state</option>
            <option value='1'>Gujarat</option>
            <option value='2'>Rajasthan</option>
            <option value='3'>Maharashtra</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default EditStudent;
