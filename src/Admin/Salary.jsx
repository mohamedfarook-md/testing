import React from "react";


export default function Salary() {
  const salaryStats = [
    { id: 1, title: "Total Salaries", amount: "₹2,40,000" },
    { id: 2, title: "Pending Payments", amount: "₹38,700" },
    { id: 3, title: "Paid This Month", amount: "₹1,20,000" },
  ];

  const salaryTable = [
    { name: "John Doe", role: "Driver", amount: "₹15,000", status: "Paid" },
    { name: "Ravi Kumar", role: "Driver", amount: "₹18,000", status: "Pending" },
    { name: "Priya Sharma", role: "Support", amount: "₹22,000", status: "Paid" },
    { name: "Karan Singh", role: "Driver", amount: "₹17,500", status: "Pending" },
  ];

  return (
    <div id="salary">
      <div className="page-header">
        <h2 className="page-title">Salary</h2>
      </div>

      <div className="salary-grid">
        {salaryStats.map((stat) => (
          <div key={stat.id} className="salary-card">
            <h3 className="salary-title">{stat.title}</h3>
            <p className="salary-amount">{stat.amount}</p>
          </div>
        ))}
      </div>

      <div className="card salary-table">
        <div className="card-header">
          <h3 className="card-title">Employee Salary Details</h3>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Salary</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {salaryTable.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.role}</td>
                  <td>{row.amount}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        row.status === "Paid" ? "status-active" : "status-pending"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
