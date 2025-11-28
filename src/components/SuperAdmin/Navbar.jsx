
import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Navbar(){
  const navigate = useNavigate();

  const toggleSidebar = () => {
    document.getElementById('sidebar')?.classList.toggle('open');
    document.getElementById('sidebarOverlay')?.classList.toggle('show');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-btn" onClick={toggleSidebar}><i className="fa-solid fa-bars"></i></button>
        <div className="navbar-brand" onClick={() => navigate('/admin/overview')}>
          Rydmate <span>SUPER ADMIN</span>
        </div>
      </div>

      <div className="navbar-right">
        <div className="search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input id="searchInput" placeholder="Search anything..." />
        </div>

        <div className="notification-icon" onClick={() => alert('Open notifications')}>
          <i className="fa-solid fa-bell"></i>
          <span className="notification-badge">8</span>
        </div>

        <div className="admin-info" onClick={() => alert('Open profile')}>
          <div className="admin-details">
            <div className="admin-name">Admin User</div>
            <div className="admin-role">Super Administrator</div>
          </div>
          <div className="admin-avatar">AU</div>
        </div>
      </div>
    </nav>
  );
}
