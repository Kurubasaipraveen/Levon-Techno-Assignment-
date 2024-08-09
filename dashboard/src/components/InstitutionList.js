import React from 'react';
import '../styles/InstitutionList.css';

const institutionListData = [
  { name: 'Samantha Wilkium', id: '123456789', score: 2300 },
  { name: 'Reona', id: '123456786', score: 1900 },
  { name: 'John', id: '123456785', score: 200 },
  { name: 'Jonathan', id: '123456784', score: 1300 },
  { name: 'Ramya', id: '123456783', score: 200 },
];

function InstitutionList() {
  return (
    <div className="institution-list widget">
      <h3>Institution List</h3>
      <ul>
        {institutionListData.map((item, index) => (
          <li key={index}>
            {item.name} - {item.id} - {item.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InstitutionList;
