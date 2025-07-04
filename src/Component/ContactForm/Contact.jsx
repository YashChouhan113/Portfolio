import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState("success");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4fe77f07-a13f-4bbd-a70a-8cdf3949c4ce");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setAlertType("success");
      setAlertMessage("✅ Message sent successfully!");
      event.target.reset();
    } else {
      setAlertType("danger");
      setAlertMessage("❌ Something went wrong. Please try again!");
    }

    setTimeout(() => {
      setAlertMessage(null);
    }, 5000);
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact</h2>
      <div className="container contact-container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-12">
            <div className="contact-form d-flex flex-wrap p-4">
              {/* Left: Form */}
              <div className="form-left flex-fill pe-lg-4 mb-4 mb-lg-0">
                {alertMessage && (
                  <div className={`alert alert-${alertType} mb-3`} role="alert">
                    {alertMessage}
                  </div>
                )}
                <form onSubmit={onSubmit}>
                  <div className="input-group-custom">
                    <span className="input-icon">
                      <i className="bi bi-person"></i>
                    </span>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="input-group-custom">
                    <span className="input-icon">
                      <i className="bi bi-envelope"></i>
                    </span>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="input-group-custom">
                    <span className="input-icon">
                      <i className="bi bi-chat-dots"></i>
                    </span>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-contact w-100">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Right: Info Content */}
              <div className="form-right flex-fill ps-lg-4 mt-4 mt-lg-0">
                <h4>Let’s Work Together!</h4>
                <p>
                  I'm a passionate <b>Web Developer</b> ready to take on freelance or full-time opportunities.
                  Got a project in mind? Let’s connect and build something amazing!
                </p>
                <p>
                  <i className="bi bi-geo-alt"></i>
                  <b> Location:</b> Indore, Madhya Pradesh, India
                </p>
                <p>
                  <i className="bi bi-envelope"></i>
                  <b> Email:</b> yashchouhan22082@gmail.com
                </p>
                <div className="contact-social mt-3">
                  <a href="https://github.com/YashChouhan113" className="me-3"><i className="bi bi-github"></i> GitHub</a>
                  <a href="https://www.linkedin.com/in/yash-chouhan-bbbb8b28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="me-3"><i className="bi bi-linkedin"></i> LinkedIn</a>
                  <a href="https://www.instagram.com/its_yash.113?igsh=anpxNm52OTJ2dDVy" className="me-3"><i className="bi bi-instagram"></i> Instagram</a>
                  <a href="/Images/resume.pdf"  download="Yash_Chouhan_Resume.pdf"  className="me-3"><i className="bi bi-download"></i> Download CV</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
