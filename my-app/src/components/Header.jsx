import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>My Website</h2>

      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> |
        <Link to="/login">Login</Link> |
        <Link to="/signup">Sign Up</Link>
        <Link to="/product">Products</Link>
      </nav>
      <hr />
    
    </header>
  );
}

export default Header;