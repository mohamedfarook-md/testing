import React from 'react';

export default function Customers(){
  function viewCustomerDetails(id){
    // use the same mock data as original for parity
    const mockData = {
      'CUST-001': { name: 'Sarah Kumar', phone: '+91 98765 43210', email: 'sarah@example.com', totalRides: '125', totalSpent: '₹45,600', avgRating: '4.9', joinDate: 'Mar 10, 2024', favoriteRoute: 'MG Road → Indiranagar' },
      'CUST-002': { name: 'Raj Patel', phone: '+91 98765 43211', email: 'raj@example.com', totalRides: '89', totalSpent: '₹32,400', avgRating: '4.8', joinDate: 'Apr 15, 2024', favoriteRoute: 'Koramangala → Electronic City' },
      'CUST-003': { name: 'Priya Sharma', phone: '+91 98765 43212', email: 'priya@example.com', totalRides: '45', totalSpent: '₹18,900', avgRating: '4.7', joinDate: 'May 20, 2024', favoriteRoute: 'HSR Layout → Whitefield' }
    };

    const d = mockData[id] || mockData['CUST-001'];
    document.getElementById('detailsModalTitle').innerHTML = `<i class="fa-solid fa-user"></i> Customer Details - ${id}`;
    document.getElementById('detailsModalBody').innerHTML = `
      <div class="detail-section">
        <div class="detail-section-title"><i class="fa-solid fa-user"></i> Personal Information</div>
        <div class="detail-row"><span class="detail-label">Full Name</span><span class="detail-value">${d.name}</span></div>
        <div class="detail-row"><span class="detail-label">Phone Number</span><span class="detail-value">${d.phone}</span></div>
        <div class="detail-row"><span class="detail-label">Email</span><span class="detail-value">${d.email}</span></div>
        <div class="detail-row"><span class="detail-label">Join Date</span><span class="detail-value">${d.joinDate}</span></div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title"><i class="fa-solid fa-chart-bar"></i> Activity Statistics</div>
        <div class="detail-row"><span class="detail-label">Total Rides</span><span class="detail-value">${d.totalRides}</span></div>
        <div class="detail-row"><span class="detail-label">Total Spent</span><span class="detail-value" style="color:var(--green)">${d.totalSpent}</span></div>
        <div class="detail-row"><span class="detail-label">Average Rating Given</span><span class="detail-value">⭐ ${d.avgRating}</span></div>
        <div class="detail-row"><span class="detail-label">Favorite Route</span><span class="detail-value">${d.favoriteRoute}</span></div>
      </div>
    `;
    window.showModal('detailsModal');
  }

  return (
    <div id="customers">
      <div className="page-header">
        <h1 className="page-title">Customer Management</h1>
        <div className="header-actions">
          <button className="btn btn-secondary">All Customers</button>
          <button className="btn btn-secondary">Active</button>
          <button className="btn btn-secondary">Inactive</button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header"><div className="stat-label">Total Customers</div><div className="stat-icon"><i className="fa-solid fa-users"></i></div></div>
          <div className="stat-value">24,567</div>
        </div>
        <div className="stat-card">
          <div className="stat-header"><div className="stat-label">Active Customers</div><div className="stat-icon"><i className="fa-solid fa-circle-check"></i></div></div>
          <div className="stat-value">22,134</div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Customer List</h2>
          <div className="search-bar" style={{position:'relative'}}>
            <input type="text" placeholder="Search customers..." id="customerSearch" style={{background:'var(--gray-light)', color:'var(--dark-blue)', width:'300px'}} />
            <i className="fa-solid fa-magnifying-glass" style={{color:'var(--gray-dark)'}}></i>
          </div>
        </div>

        <div className="table-container">
          <table id="customersTable">
            <thead>
              <tr><th>Customer ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Total Rides</th><th>Status</th><th>Actions</th></tr>
            </thead>
            <tbody>
              <tr data-customer-id="CUST-001" data-status="active">
                <td>#CUST-001</td><td><strong>Sarah Kumar</strong></td><td>sarah@example.com</td><td>+91 98765 43210</td><td>125</td>
                <td><span className="status-badge status-active"><i className="fa-solid fa-circle-check"></i> Active</span></td>
                <td>
                  <div className="action-icons">
                    <i className="fa-solid fa-eye action-icon" onClick={() => viewCustomerDetails('CUST-001') } title="View Details" />
                    <i className="fa-solid fa-history action-icon" onClick={() => alert('View history CUST-001')} title="View History" />
                  </div>
                </td>
              </tr>

              <tr data-customer-id="CUST-002" data-status="active">
                <td>#CUST-002</td><td><strong>Raj Patel</strong></td><td>raj@example.com</td><td>+91 98765 43211</td><td>89</td>
                <td><span className="status-badge status-active"><i className="fa-solid fa-circle-check"></i> Active</span></td>
                <td>
                  <div className="action-icons">
                    <i className="fa-solid fa-eye action-icon" onClick={() => viewCustomerDetails('CUST-002') } title="View Details" />
                    <i className="fa-solid fa-history action-icon" onClick={() => alert('View history CUST-002')} title="View History" />
                  </div>
                </td>
              </tr>

              <tr data-customer-id="CUST-003" data-status="inactive">
                <td>#CUST-003</td><td><strong>Priya Sharma</strong></td><td>priya@example.com</td><td>+91 98765 43212</td><td>45</td>
                <td><span className="status-badge status-pending"><i className="fa-solid fa-circle-xmark"></i> Inactive</span></td>
                <td>
                  <div className="action-icons">
                    <i className="fa-solid fa-eye action-icon" onClick={() => viewCustomerDetails('CUST-003') } title="View Details" />
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
