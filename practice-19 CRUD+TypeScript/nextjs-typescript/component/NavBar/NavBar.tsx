import { useRouter } from 'next/router';
import { Navbar, Container, Nav } from 'react-bootstrap';

// Hi Harish,
// I heard rumors about H1b. Our company is collecting employee information who is interested in H1b.
// Is it correct? If yes, then Can you please help me with that?

const HeaderNavBar = () => {
  const router = useRouter();
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand onClick={() => router.push('/')}>
          My School
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link onClick={() => router.push('/add')}>
            Add Student
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderNavBar;
