function About() {
  return (
    <>
      <section className="about-hero">
        <h1>About ShopEase</h1>
        <p>
          We are committed to providing high-quality products with the best
          shopping experience for our customers.
        </p>
      </section>

      <section className="about-section">
        <div className="about-left">
          <h2>Who We Are</h2>

          <p>
            ShopEase is an online shopping platform where customers can
            discover quality products at affordable prices. Our goal is to
            provide a secure, fast, and enjoyable shopping experience.
          </p>

          <p>
            We believe that shopping should be simple, reliable, and accessible
            to everyone.
          </p>
        </div>

        <div className="about-right">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700"
            alt="About"
          />
        </div>
      </section>

      <section className="why-us">
        <h2>Why Choose Us?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3> Fast Delivery</h3>
            <p>Quick and reliable delivery service.</p>
          </div>

          <div className="why-card">
            <h3> Secure Payment</h3>
            <p>Safe and trusted payment methods.</p>
          </div>

          <div className="why-card">
            <h3> Best Quality</h3>
            <p>Premium quality products at great prices.</p>
          </div>

          <div className="why-card">
            <h3> 24/7 Support</h3>
            <p>Our team is always here to help you.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;