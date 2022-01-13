import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/">Home</Link>
      <Link to="/react-portal">React Portals</Link>
      <Link to="/somepage">Some Page</Link>
    </div>
  );
}

export default NavBar;
