import React from "react";


export default function Revenue() {
  const stats = [
    { id: 1, title: "Today's Revenue", amount: "₹14,200" },
    { id: 2, title: "This Week", amount: "₹93,450" },
    { id: 3, title: "This Month", amount: "₹3,40,220" },
    { id: 4, title: "Total Revenue", amount: "₹12,80,000" },
  ];

  const revenueData = [
    { date: "Nov 1", rides: 112, revenue: "₹22,000" },
    { date: "Nov 2", rides: 98, revenue: "₹19,300" },
    { date: "Nov 3", rides: 105, revenue: "₹21,100" },
    { date: "Nov 4", rides: 140, revenue: "₹30,900" },
  ];

  return (
    <div id="revenue">
      <div className="page-header">
        <h2 className="page-title">Revenue</h2>
      </div>

      <div className="revenue-stats">
        {stats.map((box) => (
          <div key={box.id} className="salary-card">
            <h3 className="salary-title">{box.title}</h3>
            <p className="salary-amount revenue-highlight">{box.amount}</p>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Daily Revenue Summary</h3>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Total Rides</th>
                <th>Revenue</th>
              </tr>
            </thead>

            <tbody>
              {revenueData.map((row, index) => (
                <tr key={index}>
                  <td>{row.date}</td>
                  <td>{row.rides}</td>
                  <td>{row.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
