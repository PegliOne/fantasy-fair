import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Header = styled.header`
  background-color: #192841;
  display: flex;
  align-items: center;
  height: 48px;
  font-size: calc(12px + 2vmin);
  color: white;

  div {
    display: flex;
    margin: 0 24px;
    color: #91BAD6;
    font-weight: 700;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;

    ul {
      display: flex;
      height: 48px;
      padding: 0;

      a {
        display: flex;
        align-items: center;
        height: 100%;
        color: #fff;
        text-decoration: none;
        padding: 0 12px;
        font-size: calc(10px + 1vmin);
        transition: background-color 200ms;

        &:hover {
          background-color: #2D3033;
        }
      }
    }
  }
`;

const Navbar = () => {
  return ( 
    <Header>
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
    </Header>
  );
}
 
export default Navbar;