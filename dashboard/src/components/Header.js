import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Kuruba saipraveen</div>
      <div className="header-right">
        <input type="text" placeholder="Search here" className="search-bar" />
        <div className="notifications">🔔</div>
        <div className="profile">
          <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="User" className="profile-image" />
          <span>Super Admin</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
