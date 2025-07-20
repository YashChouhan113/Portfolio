import React from "react";
import "./About.css";
import {
  FaCode,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaRobot,
} from "react-icons/fa";

function About() {
  return (
    <div className="container py-5 about-container" id="about">
      <div className="row about-row align-items-center g-4 d-flex flex-row">
        <div className="col-lg-6 col-md-6 text-center">
          <img
            src="/Images/yccc.jpg"
            alt="Yash"
            className="img-fluid about-img shadow "
          />
        </div>
        <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
          <h1 className="about-heading mb-4">About Me</h1>
          <div className="about-cards-wrapper">
            <div className="about-card d-flex align-items-start">
              <FaCode className="about-icon" />
              <div>
                <h2>React Developer</h2>
                <p>
                  I'm a React developer focused on creating interactive,
                  scalable and high-performance frontend web applications with a
                  great user experience.
                </p>
              </div>
            </div>
            <div className="about-card d-flex align-items-start">
              <FaGraduationCap className="about-icon" />
              <div>
                <h2>Education</h2>
                <p>
                  Bachelor of Technology from{" "}
                  <strong>Chameli Devi Group of Institutions</strong>,
                  graduating in 2025.
                </p>
              </div>
            </div>
            <div className="about-card d-flex align-items-start">
              <FaMapMarkerAlt className="about-icon" />
              <div>
                <h2>Location</h2>
                <p>
                  Based in <strong>Indore, Madhya Pradesh</strong>, India.
                </p>
              </div>
            </div>
            <div className="about-card d-flex align-items-start">
              <FaRobot className="about-icon" />
              <div>
                <h2>AI Enthusiast</h2>
                <p>
                  I'm exploring AI-powered tools and APIs to boost productivity
                  and build smart web solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
