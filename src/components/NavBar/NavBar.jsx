import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <ul>
      {/* <a href="/Login">Login</a> */}
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/products">Products</Link>
    </ul>
  );
};
