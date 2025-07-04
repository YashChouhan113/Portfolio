import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState("success");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "4fe77f07-a13f-4bbd-a70a-8cdf3949c4ce"); // ✅ Make sure this is linked to your email

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setAlertType("success");
      setAlertMessage("✅ Feedback sent successfully! Check your email.");
      event.target.reset();
    } else {
      setAlertType("danger");
      setAlertMessage("❌ Failed to send feedback. Try again.");
    }

    setTimeout(() => {
      setAlertMessage(null);
    }, 5000);
  };

  return (
    <footer className="footer">
      <div className="footer-content container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>Yash's Portfolio</h3>
          <p>
            Crafting digital experiences with passion and precision. A web developer
            dedicated to creating beautiful, functional, and user-friendly websites.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("about")}>About Me</li>
            <li onClick={() => scrollToSection("projects")}>Projects</li>
            <li onClick={() => scrollToSection("skills")}>Skills</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>
            <i className="bi bi-envelope"></i> yashchouhan22082@gmail.com
          </p>
          <p>Indore, Madhya Pradesh, India</p>
        </div>

        {/* Feedback Form */}
        <div className="footer-section feedback">
          <h4>Feedback</h4>
          {alertMessage && (
            <div className={`alert alert-${alertType} mt-2`} role="alert">
              {alertMessage}
            </div>
          )}
          <form onSubmit={onSubmit}>
            <textarea
              name="message"
              placeholder="Your Feedback"
              rows="3"
              className="form-control mb-2"
              required
            />
            <button type="submit" className="btn btn-feedback w-100">
              Send Feedback
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom container">
        <div className="social-icons">
          <i className="bi bi-github"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-instagram"></i>
        </div>
        <p>© 2025 Yash Chouhan. All rights reserved.</p>
        <p>Thanks for visiting my portfolio 💜</p>
        <a href="#" className="scroll-top-btn">
          <i className="bi bi-arrow-up"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
