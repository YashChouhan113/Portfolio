import React from 'react'
import './Project.css'

function Project() {
  return (
    <section className="project-section" id="projects">
      <h2 className="project-title">My Latest Work</h2>
      <div className="project-grid">
        {/* LetSkillify LMS */}
        <a href="https://letskillify.com/" target="_blank" rel="noopener noreferrer" className="project-card-link">
          <div className="project-card">
            <img src="/Images/Letskillify.png" alt="LetSkillify LMS" className="project-img" />
            <h3>LetSkillify LMS</h3>
            <p><b>Tech Stack:</b> React, JavaScript, HTML, CSS</p>
            <ul>
              <li>Developed modules for Admission, Class, Attendance, Live Class, Purchasing, and more.</li>
              <li>Implemented advanced features for both student and admin management.</li>
            </ul>
            <p className="project-desc-en">Built a Learning Management System (LMS) using React, JavaScript, HTML, and CSS, featuring modules like Admission, Class, Attendance, Live Class, and Purchasing.</p>
          </div>
        </a>
        {/* Investobazzar */}
        <a href="https://investobazzar.com/" target="_blank" rel="noopener noreferrer" className="project-card-link">
          <div className="project-card">
            <img src="/Images/investrobazar.png" alt="Investobazzar" className="project-img" />
            <h3>Investobazzar</h3>
            <p><b>Tech Stack:</b> PHP</p>
            <ul>
              <li>Integrated Razorpay payment gateway for secure transactions.</li>
              <li>Developed dynamic forms and integrated Aadhaar API for user verification.</li>
            </ul>
            <p className="project-desc-en">Created a website using PHP, integrating Razorpay for payments and Aadhaar API for seamless user verification.</p>
          </div>
        </a>
        {/* NGO Website */}
        <a href="https://ngowebsite.com/" target="_blank" rel="noopener noreferrer" className="project-card-link">
          <div className="project-card">
            <img src="/Images/ngo.png" alt="NGO Website" className="project-img" />
            <h3>NGO Website</h3>
            <p><b>Tech Stack:</b> React</p>
            <ul>
              <li>Designed and developed a static website to showcase the NGO's work and initiatives.</li>
            </ul>
            <p className="project-desc-en">Developed a static website for an NGO using React to highlight their projects and social initiatives.</p>
          </div>
        </a>
        {/* Why Not Fly */}
        <a href="https://whynotfly.com/" target="_blank" rel="noopener noreferrer" className="project-card-link">
          <div className="project-card">
            <img src="/Images/wnf.png" alt="Why Not Fly" className="project-img" />
            <h3>Why Not Fly</h3>
            <p><b>Tech Stack:</b> React</p>
            <ul>
              <li>Created a travel website with a modern user interface and interactive features.</li>
            </ul>
            <p className="project-desc-en">Built a travel website using React, featuring an attractive UI and engaging interactive elements for users.</p>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Project