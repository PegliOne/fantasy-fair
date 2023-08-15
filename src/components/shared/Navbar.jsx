import Meteor from "meteor-react-js";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

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

        &.selected {
          background-color: #69036D;

          &:hover {
            background-color: #69036D;
          }
        }

        &:hover {
          background-color: #9866C7;
        }
      }
    }
  }
`;

const Navbar = () => {
  const path = useLocation().pathname;

  return (
    <Header>
      <div>Fantasy Fair</div>
      <nav>
        <ul>
          <Link to="/" className={ path === "/" ? "selected" : "" }>Home</Link>
          <Link to="/categories" className={ path === "/categories" ? "selected" : "" }>Story Categories</Link>
          { Meteor.user() && <Link to="/create" className={ path === "/create" ? "selected" : "" }>Create a Story</Link> }
        </ul>
        <ul>
          { Meteor.user() && <Link to="/log_out" className={ path === "/log_out" ? "selected" : "" }>Log Out</Link> }
          { !Meteor.user() && <Link to="/sign_up" className={ path === "/sign_up" ? "selected" : "" }>Sign Up</Link> }
          { !Meteor.user() && <Link to="/log_in" className={ path === "/log_in" ? "selected" : "" }>Log In</Link> }
        </ul>
      </nav>
    </Header>
  );
}
 
export default Navbar;