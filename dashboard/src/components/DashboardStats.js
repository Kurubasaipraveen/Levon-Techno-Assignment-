import React from 'react';
import  '../styles/DashboardStats.css'

const DashboardStats = () => {
    return (
        <div className="dashboard-stats">
            <div className="stat-itemone">
                <span className="stat-icon">🏫</span>
                <span className="stat-title">Total School<br/></span>
                <span className="stat-value"><strong>145</strong></span>
            </div>
            <div className="stat-item2">
                <span className="stat-icon">👥</span>
                <span className="stat-title">Total Staffs <br/></span>
                <span className="stat-value"><strong>1265</strong></span>
            </div>
            <div className="stat-item3">
                <span className="stat-icon">🎓</span>
                <span className="stat-title">Total Students<br/></span>
                <span className="stat-value"><strong>21,571</strong></span>
            </div>
            <div className="stat-item4">
                <span className="stat-icon">👨‍👩‍👧‍👦</span>
                <span className="stat-title">Total Parents<br/></span>
                <span className="stat-value"><strong>25,245</strong></span>
            </div>
        </div>
    );
};

export default DashboardStats;
