import * as React from 'react';
import { Table } from 'react-bootstrap';

interface Props {
  UserLists: {
    name: string;
    address: string;
    city: string;
    zipCode: number;
    state: string;
  }[];
}

const UserList: React.FC<Props> = ({ UserLists }) => {
  console.log(UserLists);
  return (
    <div className='mt-5 mb-5'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
