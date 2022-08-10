import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/table">Table</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Nav;
