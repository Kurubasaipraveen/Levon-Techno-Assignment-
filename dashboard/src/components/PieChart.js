import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js/auto';

ChartJS.register(ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

function PieChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: ['rgba(75,192,192,0.4)', 'rgba(255,99,132,0.4)', 'rgba(54,162,235,0.4)', 'rgba(255,206,86,0.4)', 'rgba(75,192,192,0.4)', 'rgba(153,102,255,0.4)'],
        borderColor: ['rgba(75,192,192,1)', 'rgba(255,99,132,1)', 'rgba(54,162,235,1)', 'rgba(255,206,86,1)', 'rgba(75,192,192,1)', 'rgba(153,102,255,1)'],
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  return <Pie data={data} />;
}

export default PieChart;
