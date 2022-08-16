import { Link } from "react-router-dom";
import { links, social } from "./data";
import { FaBars } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/table">Table</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <ul className="social-icons">
        {social.map((socialIcon) => {
          const {id, url, icon} = socialIcon
          return (
            <li key={id}><a href={url}>{icon}</a></li>
          )
        })}
      </ul>
    </nav>
  );
};

export default Nav;
