import React from "react";
import "./Qualification.css";

const qualifications = [
  {
    step: 1,
    title: "10th Standard",
    institution: "Little Angel H.S. School",
    board: "MP Board",
    year: "2019",
  },
  {
    step: 2,
    title: "12th Standard",
    institution: "Daily Mirror H.S. School",
    board: "MP Board",
    year: "2021",
  },
  {
    step: 3,
    title: "Graduation (B.E.)",
    institution: "Chameli Devi Group of Institutes",
    board: "RGPV University",
    year: "2025",
  },
];

const Qualification = () => {
  return (
    <section className="qualification-section container py-5">
      <h2 className="text-center mb-5 qualification-title">My Qualifications</h2>
      <div className="qualification-timeline">
        {qualifications.map((q, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-circle-wrapper">
              <div className="timeline-circle">{q.step}</div>
              {idx !== qualifications.length - 1 && <div className="timeline-line"></div>}
            </div>
            <div className="timeline-details">
              <h4>{q.title}</h4>
              <p className="institution">{q.institution}</p>
              <p className="board">{q.board}</p>
              <p className="year">Year: {q.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualification;
