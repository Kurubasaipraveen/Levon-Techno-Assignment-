import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import '../styles/InstitutionGraph.css';

const institutionGraphData = [
  { institution: 'A', score: 90 },
  { institution: 'B', score: 80 },
  { institution: 'C', score: 70 },
  { institution: 'D', score: 60 },
];

function InstitutionGraph() {
  return (
    <div className="institution-graph widget">
      <h3>Institution Graph</h3>
      <BarChart
        width={400}
        height={200}
        data={institutionGraphData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="institution" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Bar dataKey="score" fill="#ff7300" />
      </BarChart>
    </div>
  );
}

export default InstitutionGraph;
