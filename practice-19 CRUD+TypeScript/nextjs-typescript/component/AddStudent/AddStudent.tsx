import { Form, Row, Col, Button } from 'react-bootstrap';

const AddStudent = () => {
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
          <Form.Label>percentage</Form.Label>
          <Form.Control type='number' placeholder='Enter percentage' />
        </Form.Group>
      </Row>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default AddStudent;
