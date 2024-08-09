import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item"><Link to="/" className="nav-link">Government Overview</Link></li>
          <li className="nav-item"><Link to="/registry" className="nav-link">Institute Registry</Link></li>
          <li className="nav-item"><Link to="/academics" className="nav-link">Academics</Link></li>
          <li className="nav-item"><Link to="/inspection" className="nav-link">Institute Inspection</Link></li>
          <li className="nav-item"><Link to="/tickets" className="nav-link">Raise a Ticket</Link></li>
          <li className="nav-item"><Link to="/communication" className="nav-link">Communication</Link></li>
          <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
