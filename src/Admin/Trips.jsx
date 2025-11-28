import React from 'react';

export default function Trips(){
  function viewTripDetails(tripId){
    const mockData = {
      'TRP-1001': { customer: 'Sarah Kumar', driver: 'John Driver', from: 'MG Road, Bangalore', to: 'Indiranagar, Bangalore', distance: '12.5 km', duration: '28 minutes', fare: '₹450', paymentMethod: 'UPI', dateTime: 'Nov 14, 2025 - 10:30 AM', status: 'Completed', rating: '5.0' }
    };
    const data = mockData[tripId] || mockData['TRP-1001'];
    document.getElementById('detailsModalTitle').innerHTML = `<i class="fa-solid fa-route"></i> Trip Details - ${tripId}`;
    document.getElementById('detailsModalBody').innerHTML = `
      <div class="detail-section">
        <div class="detail-section-title"><i class="fa-solid fa-users"></i> Participants</div>
        <div class="detail-row"><span class="detail-label">Customer</span><span class="detail-value">${data.customer}</span></div>
        <div class="detail-row"><span class="detail-label">Driver</span><span class="detail-value">${data.driver}</span></div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title"><i class="fa-solid fa-map-location-dot"></i> Route Information</div>
        <div class="detail-row"><span class="detail-label">Pickup Location</span><span class="detail-value">${data.from}</span></div>
        <div class="detail-row"><span class="detail-label">Drop Location</span><span class="detail-value">${data.to}</span></div>
        <div class="detail-row"><span class="detail-label">Distance</span><span class="detail-value">${data.distance}</span></div>
        <div class="detail-row"><span class="detail-label">Duration</span><span class="detail-value">${data.duration}</span></div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title"><i class="fa-solid fa-indian-rupee-sign"></i> Payment Details</div>
        <div class="detail-row"><span class="detail-label">Total Fare</span><span class="detail-value" style="color:var(--green); font-size:1.1rem;">${data.fare}</span></div>
        <div class="detail-row"><span class="detail-label">Payment Method</span><span class="detail-value">${data.paymentMethod}</span></div>
        <div class="detail-row"><span class="detail-label">Date & Time</span><span class="detail-value">${data.dateTime}</span></div>
      </div>
    `;
    window.showModal('detailsModal');
  }

  function trackTrip(tripId){
    alert(`Opening live tracking for trip ${tripId}...`);
  }

  return (
    <div id="trips">
      <div className="page-header"><h1 className="page-title">Trip Tracking & Management</h1>
        <div className="header-actions">
          <button className="btn btn-secondary">All Trips</button>
          <button className="btn btn-secondary">Ongoing</button>
          <button className="btn btn-secondary">Completed</button>
          <button className="btn btn-secondary">Cancelled</button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card"><div className="stat-header"><div className="stat-label">Total Trips</div><div className="stat-icon"><i className="fa-solid fa-route"></i></div></div><div className="stat-value">89,450</div></div>
        <div className="stat-card"><div className="stat-header"><div className="stat-label">Ongoing Trips</div><div className="stat-icon"><i className="fa-solid fa-car-side"></i></div></div><div className="stat-value">247</div></div>
        <div className="stat-card"><div className="stat-header"><div className="stat-label">Completed Today</div><div className="stat-icon"><i className="fa-solid fa-circle-check"></i></div></div><div className="stat-value">1,523</div></div>
        <div className="stat-card"><div className="stat-header"><div className="stat-label">Avg Trip Duration</div><div className="stat-icon"><i className="fa-solid fa-clock"></i></div></div><div className="stat-value">28 min</div></div>
      </div>

      <div className="card">
        <div className="card-header"><h2 className="card-title">All Trips</h2>
          <div className="search-bar" style={{position:'relative'}}><input placeholder="Search by trip ID, customer, or driver..." style={{width:350, background:'var(--gray-light)', color:'var(--dark-blue)'}}/></div>
        </div>

        <div className="table-container">
          <table>
            <thead><tr><th>Trip ID</th><th>Customer</th><th>Driver</th><th>From → To</th><th>Distance</th><th>Fare</th><th>Date & Time</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              <tr><td><strong>#TRP-1001</strong></td><td>Sarah Kumar</td><td>John Driver</td><td><div style={{fontSize:'.85rem'}}><div><i className="fa-solid fa-location-dot" style={{color:'var(--green)'}}></i> MG Road, Bangalore</div><div style={{marginTop:5}}><i className="fa-solid fa-location-dot" style={{color:'var(--primary-red)'}}></i> Indiranagar, Bangalore</div></div></td><td>12.5 km</td><td><strong>₹450</strong></td><td>Nov 14, 2025<br/>10:30 AM</td><td><span className="status-badge status-completed"><i className="fa-solid fa-circle-check"></i> Completed</span></td><td><div className="action-icons"><i className="fa-solid fa-eye action-icon" onClick={()=>viewTripDetails('TRP-1001')}></i><i className="fa-solid fa-map-location-dot action-icon" onClick={()=>trackTrip('TRP-1001')}></i></div></td></tr>

              <tr><td><strong>#TRP-1002</strong></td><td>Raj Patel</td><td>Sarah Johnson</td><td><div style={{fontSize:'.85rem'}}><div><i className="fa-solid fa-location-dot" style={{color:'var(--green)'}}></i> Koramangala, Bangalore</div><div style={{marginTop:5}}><i className="fa-solid fa-location-dot" style={{color:'var(--primary-red)'}}></i> Electronic City, Bangalore</div></div></td><td>18.2 km</td><td><strong>₹620</strong></td><td>Nov 14, 2025<br/>11:45 AM</td><td><span className="status-badge status-pending"><i className="fa-solid fa-spinner fa-spin"></i> Ongoing</span></td><td><div className="action-icons"><i className="fa-solid fa-eye action-icon" onClick={()=>viewTripDetails('TRP-1002')}></i><i className="fa-solid fa-map-location-dot action-icon" onClick={()=>trackTrip('TRP-1002')}></i></div></td></tr>

              <tr><td><strong>#TRP-1003</strong></td><td>Priya Sharma</td><td>Mike Wilson</td><td><div style={{fontSize:'.85rem'}}><div><i className="fa-solid fa-location-dot" style={{color:'var(--green)'}}></i> HSR Layout, Bangalore</div><div style={{marginTop:5}}><i className="fa-solid fa-location-dot" style={{color:'var(--primary-red)'}}></i> Whitefield, Bangalore</div></div></td><td>22.0 km</td><td><strong>₹780</strong></td><td>Nov 14, 2025<br/>09:15 AM</td><td><span className="status-badge" style={{background:'#fee2e2', color:'#dc2626'}}><i className="fa-solid fa-circle-xmark"></i> Cancelled</span></td><td><div className="action-icons"><i className="fa-solid fa-eye action-icon" onClick={()=>viewTripDetails('TRP-1003')}></i></div></td></tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
