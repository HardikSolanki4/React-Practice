import './App.scss';
import { Container } from 'react-bootstrap';

import UserDetails from './component/UserDetails';
import AddUser from './component/AddUser';
import UserList from './component/UserList';

function App() {
  return (
    <Container>
      <AddUser />
      <UserList />
      <UserDetails />
    </Container>
  );
}

export default App;
