import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/DriverDashboard/Navbar";
import Sidebar from "../components/DriverDashboard/Sidebar";

export default function DriverLayout() {
  return (
    <div className="app-root">
      <Navbar />
      <Sidebar />
      <main className="main-content">
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
}


