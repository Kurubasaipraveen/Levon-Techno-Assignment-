import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import '../styles/AssessmentAndExamination.css';

const assessmentData = {
  chartData: [
    { day: 'Mon', school: 80, college: 75 },
    { day: 'Tue', school: 85, college: 70 },
    { day: 'Wed', school: 70, college: 65 },
    { day: 'Thu', school: 90, college: 85 },
    { day: 'Fri', school: 80, college: 75 },
    { day: 'Sat', school: 85, college: 80 },
  ],
  examinationSchedule: 1235,
  marksAssessment: 456,
  schoolPercentage: 79,
  collegePercentage: 80,
};

function AssessmentAndExamination() {
  return (
    <div className="assessment-examination widget">
      <h3>Assessment and examination</h3>
      <p>Track institution inspections</p>
      <LineChart
        width={400}
        height={200}
        data={assessmentData.chartData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="day" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Line type="monotone" dataKey="school" stroke="#ff7300" />
        <Line type="monotone" dataKey="college" stroke="#387908" />
      </LineChart>
      <div className="stats">
        <div className="stat-item">
          <p>{assessmentData.schoolPercentage}%</p>
          <p>School</p>
        </div>
        <div className="stat-item">
          <p>{assessmentData.collegePercentage}%</p>
          <p>College</p>
        </div>
      </div>
    </div>
  );
}

export default AssessmentAndExamination;
