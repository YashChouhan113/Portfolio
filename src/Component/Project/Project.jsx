
import React from 'react';
import Slider from 'react-slick';
import './Project.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'LetSkillify LMS',
    image: '/Images/Letskillify.png',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    description: 'Built a Learning Management System (LMS) featuring modules like Admission, Class, Attendance, Live Class, and Purchasing.',
    details: [
      'Developed modules for Admission, Class, Attendance, Live Class, Purchasing, and more.',
      'Implemented advanced features for both student and admin management.'
    ],
    link: 'https://letskillify.com/',
  },
  {
    title: 'Investobazzar',
    image: '/Images/investrobazar.png',
    tech: ['PHP'],
    description: 'Created a dynamic website using PHP, Razorpay API, and Aadhaar verification API.',
    details: [
      'Integrated Razorpay payment gateway for secure transactions.',
      'Developed dynamic forms and integrated Aadhaar API for verification.'
    ],
    link: 'https://www.investobazar.com/',
  },
  {
    title: 'NGO Website',
    image: '/Images/ngo.png',
    tech: ['React'],
    description: "Designed and developed a static website to showcase the NGO's work and mission.",
    details: [
      "Designed and developed a static website to showcase the NGO's work and mission."
    ],
    link: 'https://webnextpro.com/tf/charitia/index.html',
  },
  {
    title: 'Why Not Fly',
    image: '/Images/wnf.png',
    tech: ['React'],
    description: 'Travel website with engaging frontend using React.',
    details: [
      'Created a travel website with a modern user interface and interactive features.'
    ],
    link: 'https://whynotfly.in/',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  cssEase: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  responsive: [
    {
      breakpoint: 1400,
      settings: { 
        slidesToShow: 3,
        slidesToScroll: 1
      },
    },
    {
      breakpoint: 1200,
      settings: { 
        slidesToShow: 2,
        slidesToScroll: 1
      },
    },
    {
      breakpoint: 768,
      settings: { 
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      },
    },
  ],
};

const Project = () => {
  return (
    <section className="project-section" id="projects">
      <h2 className="project-title">My Projects</h2>
      <div className="project-slider">
        <Slider {...sliderSettings}>
          {projects.map((project, idx) => (
            <a
              href={project.link}
              className="project-card-link"
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
            >
              <div className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                <h3>{project.title}</h3>
                <p><b>Tech Stack:</b> {project.tech.join(', ')}</p>
                <ul>
                  {project.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
                <p className="project-desc-en">{project.description}</p>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Project;
