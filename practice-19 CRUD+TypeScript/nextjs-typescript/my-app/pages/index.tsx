import type { NextPage } from 'next';
import UserList from '../component/UserList';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const users = [
    {
      name: 'Hardik Solanki',
      address: '3 paras society',
      city: 'rajkot',
      zipCode:360002,
      state: 'gujarat',
    },
    {
      name: 'Shivani Solanki',
      address: '3 paras society',
      city: 'rajkot',
      zipCode:360002,
      state: 'gujarat',
    },
  ];
  return (
    <div className={styles.container}>
      <UserList UserLists={users} />
    </div>
  );
};

export default Home;
