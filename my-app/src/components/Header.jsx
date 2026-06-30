import { Link } from "react-router-dom";

function Header() {
  return (
   <header className="header">
      <div className="logo">
        <Link to="/">ShopEase</Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="nav-btns">
        <Link to="/login" className="btn login-btn">
          Login
        </Link>

        <Link to="/signup" className="btn signup-btn">
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Header;