import React from 'react';

export default function Deals(){
  return (
    <div id="deals">
      <div className="page-header">
        <h1 className="page-title">Deals Management</h1>
        <div className="header-actions">
          <button className="btn btn-primary" onClick={() => alert('Add New Deal')}><i className="fa-solid fa-plus"></i> Add New Deal</button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card"><div className="stat-header"><div className="stat-label">Active Deals</div><div className="stat-icon"><i className="fa-solid fa-tags"></i></div></div><div className="stat-value">12</div><div className="stat-change"><i className="fa-solid fa-arrow-trend-up"></i>2 from last month</div></div>
        <div className="stat-card"><div className="stat-header"><div className="stat-label">Total Redemptions</div><div className="stat-icon"><i className="fa-solid fa-ticket"></i></div></div><div className="stat-value">8,547</div><div className="stat-change"><i className="fa-solid fa-arrow-trend-up"></i>18.7% from last month</div></div>
        <div className="stat-card"><div className="stat-header"><div className="stat-label">Revenue from Deals</div><div className="stat-icon"><i className="fa-solid fa-chart-line"></i></div></div><div className="stat-value">₹2.8M</div><div className="stat-change"><i className="fa-solid fa-arrow-trend-up"></i>22.4% from last month</div></div>
      </div>

      <div className="deals-grid">
        <div className="deal-card">
          <div className="deal-header">
            <div className="deal-badge">🔥 HOT DEAL</div>
            <div className="deal-title">First Ride Discount</div>
            <div className="deal-subtitle">For new customers only</div>
          </div>
          <div className="deal-body">
            <div className="deal-discount">50% OFF</div>
            <div className="deal-details">
              <div className="deal-detail"><i className="fa-solid fa-calendar"></i><span>Valid till: Dec 31, 2025</span></div>
              <div className="deal-detail"><i className="fa-solid fa-users"></i><span>Used: 1,247 times</span></div>
              <div className="deal-detail"><i className="fa-solid fa-indian-rupee-sign"></i><span>Max discount: ₹200</span></div>
            </div>
            <div className="deal-footer">
              <div className="deal-actions">
                <button className="action-btn edit" onClick={() => alert('Edit Deal')}><i className="fa-solid fa-pen"></i> Edit</button>
                <button className="action-btn delete" onClick={() => { if(confirm('Delete this deal?')) alert('Deal deleted') }}><i className="fa-solid fa-trash"></i> Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
