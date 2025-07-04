import React from 'react';
import './Skill.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiNextdotjs } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="skill-icon html" /> },
  { name: 'CSS', icon: <FaCss3Alt className="skill-icon css" /> },
  { name: 'JavaScript', icon: <FaJs className="skill-icon js" /> },
  { name: 'React', icon: <FaReact className="skill-icon react" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="skill-icon tailwind" /> },
  { name: 'Redux', icon: <SiRedux className="skill-icon redux" /> },
  { name: 'Git', icon: <FaGitAlt className="skill-icon git" /> },
  { name: 'GitHub', icon: <FaGithub className="skill-icon github" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="skill-icon bootstrap" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="skill-icon nextjs" /> },
];

function Skill() {
  return (
    <section className="skills-section" id='skills'>
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            {skill.icon}
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;