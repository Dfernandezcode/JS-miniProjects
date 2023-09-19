import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li className="nav__li">
          <Link to="/todolist" className="nav__li--link">
            To-Do List
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
