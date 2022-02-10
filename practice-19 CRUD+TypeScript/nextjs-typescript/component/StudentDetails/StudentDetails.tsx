import { Form, Row, Col, Button } from 'react-bootstrap';

const StudentDetails = () => {
  return (
    <div>
      <Form className='mt-3'>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Label className='labelValue'>hardik solanki</Form.Label>
          </Form.Group>

          <Form.Group as={Col} className='mb-3' controlId='formGridAddress1'>
            <Form.Label>Address</Form.Label>
            <Form.Label className='labelValue'>1234 Main St</Form.Label>
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridCity'>
            <Form.Label>City</Form.Label>
            <Form.Label className='labelValue'>Rajkot</Form.Label>
          </Form.Group>

          <Form.Group as={Col} controlId='formGridState'>
            <Form.Label>State</Form.Label>
            <Form.Label className='labelValue'>Gujarat</Form.Label>
          </Form.Group>

          <Form.Group as={Col} controlId='formGridZip'>
            <Form.Label>Zip</Form.Label>
            <Form.Label className='labelValue'>360002</Form.Label>
          </Form.Group>
        </Row>
        {/* <Button variant='primary' type='submit'>
          Submit
        </Button> */}
      </Form>
    </div>
  );
}

export default StudentDetails;