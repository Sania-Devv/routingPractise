import { Link } from "react-router-dom";
import homeImg from "../assets/homeImg.png";

function Home() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="tag">✨ New Collection 2026</span>

        <h1>
          Shop Smart,
          <br />
          Live Better
        </h1>

        <p>
          Discover premium quality products at the best prices.
          Fast delivery, secure payment, and trusted service.
        </p>

        <div className="hero-buttons">
          <Link to="/product" className="shop-btn">
            Shop Now
          </Link>

          <Link to="/about" className="learn-btn">
            Learn More
          </Link>
        </div>
      </div>

      <div className="hero-right">
        <img src={homeImg} alt="Hero" />
      </div>
    </section>

    
    
  );
}

export default Home;