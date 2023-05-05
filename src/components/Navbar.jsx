import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <header className="App-header">
      <div>Fantasy Fair</div>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/categories">Story Categories</Link>
          <Link to="/create">Create a Story</Link>
        </ul>
        <ul>
          <Link to="/sign_up">Sign Up</Link>
          <Link to="/log_in">Log In</Link>
        </ul>
      </nav>
    </header>
  );
}
 
export default Navbar;