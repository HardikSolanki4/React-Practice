import { Link, Route, Routes } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to='new-user'>New User</Link>
      <Routes>
        <Route path='new-user' element={<p>Hello new User</p>} />
      </Routes>
    </section>
  );
};

export default Welcome;
