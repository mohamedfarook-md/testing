import React from 'react';


export default function TopNav({ user, onToggleSidebar, onOpenBooking }) {
  return (
    <header className="user-top-nav">
      <div className="user-nav-content">
        <div className="user-nav-left">
          <button className="user-hamburger" onClick={onToggleSidebar}><i className="fas fa-bars"></i></button>
          <div className="user-logo"><span>Rydmate</span></div>
        </div>

        <div className="user-nav-right">
          <button className="user-notification-btn"><i className="fas fa-bell"></i><span className="user-notification-dot"/></button>

          <div className="user-user-info">
            <div className="user-user-avatar">{user.initials}</div>
          </div>

          <button className="btn user-book-btn" onClick={onOpenBooking}><i className="fas fa-plus"></i> Book Ride</button>
        </div>
      </div>
    </header>
  );
}