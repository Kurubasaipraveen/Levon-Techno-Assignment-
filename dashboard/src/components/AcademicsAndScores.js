import React from 'react';
import '../styles/AcademicsAndScores.css';

const academicsData = {
  calendar: ['22 Mar', '23 Mar', '24 Mar', '25 Mar', '26 Mar', '27 Mar', '28 Mar'],
  scores: [
    { subject: 'English', class: 'VI A', score: 80 },
    { subject: 'Physics', class: 'VI A', score: 70 },
  ],
};

function AcademicsAndScores() {
  return (
    <div className="academics-scores widget">
      <h3>Academics and Scores</h3>
      <div className="calendar">
        {academicsData.calendar.map((date, index) => (
          <span key={index}>{date}</span>
        ))}
      </div>
      <div className="score-details">
        {academicsData.scores.map((item, index) => (
          <div key={index} className="score-item">
            <p>{item.subject}</p>
            <p>{item.class}</p>
            <p>{item.score}%</p>
          </div>
        ))}
      </div>
      <button className="details-button">Details</button>
    </div>
  );
}

export default AcademicsAndScores;
