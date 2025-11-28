import React, { useEffect, useRef } from 'react';
import { createLineChart, createPieChart } from '../components/SuperAdmin/ChartInit';

export default function Overview(){
  const revenueRef = useRef(null);
  const pieRef = useRef(null);
  const charts = useRef({});

  useEffect(()=> {
    // revenue chart (line)
    const revenueData = {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets:[{ label:'Revenue', data:[1.2,1.4,1.5,1.7,1.9,2.1,2.3,2.6,2.8,3.0,3.2,3.5], fill:true }]
    };
    charts.current.revenue = createLineChart(revenueRef.current, revenueData);

    const pieData = {
      labels:['Rides','Wallets','Ads','Other'],
      datasets:[{ data:[55,25,12,8] }]
    };
    charts.current.pie = createPieChart(pieRef.current, pieData);

    return () => {
      Object.values(charts.current).forEach(c => { try{ c.destroy(); }catch(e){} });
    };
  }, []);

  return (
    <div id="overview">
      <div className="page-header"><h1 className="admin-page-title">Dashboard Overview</h1></div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header"><div className="stat-label">Total Revenue</div><div className="stat-icon"><i className="fa-solid fa-indian-rupee-sign"></i></div></div>
          <div className="stat-value">₹12.5M</div>
          <div className="stat-change"><i className="fa-solid fa-arrow-trend-up"></i> 12.5% from last month</div>
        </div>
        <div className="stat-card">
          <div className="stat-header"><div className="stat-label">Total Customers</div><div className="stat-icon"><i className="fa-solid fa-user-group"></i></div></div>
          <div className="stat-value">24,567</div>
          <div className="stat-change"><i className="fa-solid fa-arrow-trend-up"></i> 8.2% from last month</div>
        </div>
        <div className="stat-card">
          <div className="stat-header"><div className="stat-label">Active Drivers</div><div className="stat-icon"><i className="fa-solid fa-id-card"></i></div></div>
          <div className="stat-value">1,247</div>
          <div className="stat-change"><i className="fa-solid fa-arrow-trend-up"></i> 5.1% from last month</div>
        </div>
        <div className="stat-card">
          <div className="stat-header"><div className="stat-label">Total Rides</div><div className="stat-icon"><i className="fa-solid fa-route"></i></div></div>
          <div className="stat-value">89,450</div>
          <div className="stat-change"><i className="fa-solid fa-arrow-trend-up"></i> 15.3% from last month</div>
        </div>
      </div>

      <div className="chart-grid">
        <div className="card">
          <div className="card-header"><h2 className="card-title">Revenue Analytics</h2></div>
          <div className="chart-container"><canvas id="revenueChart" ref={revenueRef}></canvas></div>
        </div>
        <div className="card">
          <div className="card-header"><h2 className="card-title">Revenue Distribution</h2></div>
          <div className="chart-container"><canvas id="pieChart" ref={pieRef}></canvas></div>
        </div>
      </div>

      <div className="card">
        <div className="card-header"><h2 className="card-title">Recent Transactions</h2></div>
        <div className="table-container">
          <table>
            <thead>
              <tr><th>Transaction ID</th><th>Customer</th><th>Amount</th><th>Date</th><th>Status</th><th>Actions</th></tr>
            </thead>
            <tbody>
              <tr><td>#TXN-12456</td><td>Sarah Kumar</td><td><strong>₹450</strong></td><td>Nov 11, 2025</td><td><span className="status-badge status-completed"><i className="fa-solid fa-circle-check"></i> Completed</span></td><td><div className="action-icons"><i className="fa-solid fa-eye action-icon"></i><i className="fa-solid fa-download action-icon" onClick={() => alert('Download invoice')}></i></div></td></tr>
              <tr><td>#TXN-12455</td><td>Raj Patel</td><td><strong>₹280</strong></td><td>Nov 11, 2025</td><td><span className="status-badge status-completed"><i className="fa-solid fa-circle-check"></i> Completed</span></td><td><div className="action-icons"><i className="fa-solid fa-eye action-icon"></i><i className="fa-solid fa-download action-icon" onClick={() => alert('Download invoice')}></i></div></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
