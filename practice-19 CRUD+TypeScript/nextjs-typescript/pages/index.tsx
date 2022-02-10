import type { NextPage } from 'next';
import HeaderNavBar from '../component/NavBar/NavBar';
import UserList from '../component/StudentList/StudentList';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const users = [
    {
      name: 'Hardik Solanki',
      class: 8,
      percentage: 78,
      address: '3 paras society',
      city: 'rajkot',
      zipCode: 360002,
      state: 'gujarat',
    },
    {
      name: 'Shivani Solanki',
      address: '3 paras society',
      class: 6,
      percentage: 89,
      city: 'rajkot',
      zipCode: 360002,
      state: 'gujarat',
    },
  ];
  return <UserList UserLists={users} />;
};

export default Home;
