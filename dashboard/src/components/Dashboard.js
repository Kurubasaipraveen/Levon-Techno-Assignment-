import React from 'react';

import PieChartWidget from './PieChartWidget';
import LineChartWidget from './LineChartWidget';
import BarChartWidget from './BarChartWidget';
import ActivityFeedWidget from './ActivityFeedWidget';
import DashboardStats from './DashboardStats';
import AcademicsAndScores from './AcademicsAndScores';
import AssessmentAndExamination from './AssessmentAndExamination';
import InstitutionGraph from './InstitutionGraph';
import InstitutionList from './InstitutionList';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="overview">
        <DashboardStats title="Total School" value="145" bgColor="#D0EFFF" icon="school-icon" />
        
      </div>

      <div className="charts">
        <div className="chart">
          <h3>Schools</h3>
          <LineChartWidget />
        </div>
        <div className="chart">
        <h3>Institution Inspection</h3>
          <BarChartWidget />
        </div>
        <div className="chart">
        <h3>Academic report</h3>
          <PieChartWidget />
        </div>
        <div className="chart">
          
          <ActivityFeedWidget />
          
        </div>
        <div className="chart">
          
        <AcademicsAndScores/>

          
        </div>
        <div className="chart">
          
        <AssessmentAndExamination/>
          
        </div>
        <div className="chart">
          
        <InstitutionGraph/>
          
        </div>
        <div className="chart">
          
          
        <InstitutionList/>
          
        </div>


      </div>
    </div>
  );
}

export default Dashboard;
