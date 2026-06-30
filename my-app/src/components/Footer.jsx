import { Link } from "react-router-dom";

function Footer() {
  return (
  <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <h2>ShopEase</h2>

          <p>
            Your trusted online shopping destination.
            Quality products, affordable prices, and
            fast delivery.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Products</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-box">
          <h3>Customer Care</h3>

          <p>Email: support@shopease.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Karachi, Pakistan</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 ShopEase. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;