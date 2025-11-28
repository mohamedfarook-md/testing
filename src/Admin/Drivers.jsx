import React, { useEffect, useRef } from 'react';
import { createBarChart, createPieChart } from '../components/SuperAdmin/ChartInit';

export default function Drivers(){
  const leaderboardRef = useRef(null);
  const ratingsRef = useRef(null);
  const charts = useRef({});

  useEffect(()=>{
    const barData = {
      labels: ['John Driver','Sarah Johnson','Rajesh Kumar','Mike Wilson','David Lee'],
      datasets:[{ label:'Total Trips', data:[1247,1156,1089,892,654] }]
    };
    charts.current.leaderboard = createBarChart(leaderboardRef.current, barData);

    const ratingData = {
      labels:['4.9★','4.8★','4.7★','4.6★'],
      datasets:[{ data:[40,30,20,10] }]
    };
    charts.current.ratings = createPieChart(ratingsRef.current, ratingData);

    return ()=> Object.values(charts.current).forEach(c=>c?.destroy());
  }, []);

  function viewDriverDetails(driverId){
    const mockData = {
      'DRV-2584': { name:'John Driver', phone:'+91 98765 12345', email:'john.driver@example.com', license:'KA-01-2023-0012345', vehicle:'Honda City', vehicleNumber:'KA01AB1234', rating:'4.8', totalTrips:'1,247', totalEarnings:'₹3,80,000', joinDate:'Jan 15, 2024' }
    };
    const data = mockData[driverId] || mockData['DRV-2584'];
    document.getElementById('detailsModalTitle').innerHTML = `<i class="fa-solid fa-car"></i> Driver Details - ${driverId}`;
    document.getElementById('detailsModalBody').innerHTML = `
      <div class="detail-section"><div class="detail-section-title"><i class="fa-solid fa-user"></i> Personal Information</div>
        <div class="detail-row"><span class="detail-label">Full Name</span><span class="detail-value">${data.name}</span></div>
        <div class="detail-row"><span class="detail-label">Phone Number</span><span class="detail-value">${data.phone}</span></div>
        <div class="detail-row"><span class="detail-label">Email</span><span class="detail-value">${data.email}</span></div>
        <div class="detail-row"><span class="detail-label">License Number</span><span class="detail-value">${data.license}</span></div>
      </div>
      <div class="detail-section"><div class="detail-section-title"><i class="fa-solid fa-car-side"></i> Vehicle Information</div>
        <div class="detail-row"><span class="detail-label">Vehicle Model</span><span class="detail-value">${data.vehicle}</span></div>
        <div class="detail-row"><span class="detail-label">Vehicle Number</span><span class="detail-value">${data.vehicleNumber}</span></div>
      </div>
      <div class="detail-section"><div class="detail-section-title"><i class="fa-solid fa-chart-line"></i> Performance Metrics</div>
        <div class="detail-row"><span class="detail-label">Rating</span><span class="detail-value">⭐ ${data.rating}</span></div>
        <div class="detail-row"><span class="detail-label">Total Trips</span><span class="detail-value">${data.totalTrips}</span></div>
        <div class="detail-row"><span class="detail-label">Total Earnings</span><span class="detail-value" style="color:var(--green)">${data.totalEarnings}</span></div>
        <div class="detail-row"><span class="detail-label">Join Date</span><span class="detail-value">${data.joinDate}</span></div>
      </div>
    `;
    window.showModal('detailsModal');
  }

  return (
    <div id="drivers">
      <div className="page-header">
        <h1 className="page-title">Driver Management</h1>
        <div className="header-actions">
          <button className="btn btn-primary" onClick={() => window.showModal('addDriverModal')}><i className="fa-solid fa-plus"></i> Add New Driver</button>
          <button className="btn btn-secondary">Active</button>
          <button className="btn btn-secondary">Inactive</button>
        </div>
      </div>

      <div className="tabs">
        <div className="tab active">All Drivers</div>
        <div className="tab">Leaderboard</div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Driver List</h2>
          <div className="search-bar"><input placeholder="Search drivers..." style={{width:300, background:'var(--gray-light)', color:'var(--dark-blue)'}} /></div>
        </div>

        <div className="table-container">
          <table>
            <thead><tr><th>Driver ID</th><th>Name</th><th>Phone</th><th>Vehicle</th><th>Total Rides</th><th>Rating</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              <tr><td>#DRV-2584</td><td><strong>John Driver</strong></td><td>+91 98765 12345</td><td>Honda City - KA01AB1234</td><td>1,247</td><td>⭐ 4.8</td><td><span className="status-badge status-active">Active</span></td><td><div className="action-icons"><i className="fa-solid fa-eye action-icon" onClick={()=>viewDriverDetails('DRV-2584')}></i></div></td></tr>
              <tr><td>#DRV-2585</td><td><strong>Sarah Johnson</strong></td><td>+91 98765 12346</td><td>Maruti Swift - KA02CD5678</td><td>1,156</td><td>⭐ 4.9</td><td><span className="status-badge status-active">Active</span></td><td><div className="action-icons"><i className="fa-solid fa-eye action-icon" onClick={()=>viewDriverDetails('DRV-2585')}></i></div></td></tr>
              <tr><td>#DRV-2586</td><td><strong>Rajesh Kumar</strong></td><td>+91 98765 12347</td><td>Hyundai Verna - KA03EF9012</td><td>1,089</td><td>⭐ 4.7</td><td><span className="status-badge status-pending">Inactive</span></td><td><div className="action-icons"><i className="fa-solid fa-eye action-icon" onClick={()=>viewDriverDetails('DRV-2586')}></i></div></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="leaderboard-card">
        <div className="leaderboard-header"><h2><i className="fa-solid fa-trophy" style={{color:'#FFD700'}}></i> Driver Leaderboard</h2><p>Top performers based on total trips completed this month</p></div>

        <div className="leaderboard-item">
          <div className="leaderboard-rank gold">1</div>
          <div className="medal-icon">🥇</div>
          <div className="leaderboard-avatar" style={{background:'linear-gradient(135deg,#FFD700 0%,#FFA500 100%)'}}>JD</div>
          <div className="leaderboard-info"><div className="leaderboard-name">John Driver</div>
            <div className="leaderboard-stats"><div className="leaderboard-stat"><i className="fa-solid fa-route"></i><span>1,156 trips</span></div></div>
          </div>
          <div className="leaderboard-badge" style={{background:'linear-gradient(135deg,#C0C0C0 0%,#808080 100%)'}}>1,156</div>
        </div>

        <div className="leaderboard-chart">
          <div className="card"><div className="card-header"><h2 className="card-title">Performance Comparison</h2></div><div className="chart-container"><canvas ref={leaderboardRef}></canvas></div></div>
          <div className="card"><div className="card-header"><h2 className="card-title">Rating Distribution</h2></div><div className="chart-container"><canvas ref={ratingsRef}></canvas></div></div>
        </div>
      </div>
    </div>
  );
}
