import React from 'react'

function Contact() {
  return (
    <>
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Feel free to contact us anytime.
        </p>
      </section>

      <section className="contact-section">

        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            If you have any questions about our products or services,
            don't hesitate to contact us.
          </p>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>Karachi, Pakistan</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+92 300 1234567</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>support@shopease.com</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Message</h2>

          <form>
            <input type="text" placeholder="Full Name" />

            <input type="email" placeholder="Email Address" />

            <input type="text" placeholder="Subject" />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>

      </section>
    </>
  );
}

export default Contact;
