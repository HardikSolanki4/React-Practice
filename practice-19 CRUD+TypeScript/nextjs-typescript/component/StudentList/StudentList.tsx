import * as React from 'react';
import { Table } from 'react-bootstrap';
import RemoveStudent from '../RemoveStudent/RemoveStudent';

interface Props {
  UserLists: {
    name: string;
    class: number;
    percentage: number;
    address: string;
    city: string;
    zipCode: number;
    state: string;
  }[];
}

const UserList: React.FC<Props> = ({ UserLists }) => {
  console.log('UserLists:', UserLists);

  return (
    <div className='mt-5 mb-5'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Class</th>
            <th>Percentage</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {UserLists.length !== 0 ? (
            UserLists.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.class}</td>
                <td>{item.percentage}</td>
                <td>Edit
                  <RemoveStudent />
                </td>
              </tr>
            ))
          ) : (
            <td align='center' colSpan={5}>No Student Found</td>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
