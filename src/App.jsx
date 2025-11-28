


import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

/* ---------------------- LANDING PAGE ---------------------- */
import LandingPage from "./Home/LandingPage";

/* ---------------------- SIGNUP PAGE ----------------------- */
import Signup from "./pages/Signup";

/* ---------------------- USER DASHBOARD --------------------- */
import TopNav from "./components/UserDashboard/TopNav";
import SidebarUser from "./components/UserDashboard/Sidebar";
import DashboardOverview from "./components/UserDashboard/DashboardOverview";
import Rides from "./components/UserDashboard/Rides";
import Wallet from "./components/UserDashboard/Wallet";
import Offers from "./components/UserDashboard/Offers";
import Profile from "./components/UserDashboard/Profile";
import Support from "./components/UserDashboard/Support";
import BookRideModal from "./components/UserDashboard/BookRideModal";

import userData from "./data/user.json";
import ridesData from "./data/rides.json";
import walletData from "./data/wallet.json";
import offersData from "./data/offers.json";
import ticketsData from "./data/tickets.json";

/* ---------------------- DRIVER LOGIN PAGE (NEW) ---------------------- */
import DriverLoginPage from "./pages/DriverLoginPage";

/* ---------------------- DRIVER DASHBOARD ---------------------- */
import DriverLayout from "./layout/DriverLayout";
import DriverDashboard from "./pages/Dashboard";
import DriverTrips from "./pages/Trips";
import DriverEarnings from "./pages/Earnings";
import DriverHistory from "./pages/History";
import DriverProfile from "./pages/Profile";
import DriverSettings from "./pages/Settings";

import driverData from "./data/profile.json";
import tripsData from "./data/trips.json";

/* ---------------------- ADMIN PANEL ----------------------- */
import NavbarAdmin from "./components/SuperAdmin/Navbar";
import SidebarAdmin from "./components/SuperAdmin/Sidebar";
import Modals from "./components/SuperAdmin/Modals";

import Overview from "./Admin/Overview";
import Customers from "./Admin/Customers";
import Drivers from "./Admin/Drivers";
import AdminTrips from "./Admin/Trips";
import Deals from "./Admin/Deals";
import Promotions from "./Admin/Promotions";
import Salary from "./Admin/Salary";
import Revenue from "./Admin/Revenue";



export default function App() {
  /* ---------------- USER STATE ---------------- */
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  const savedUser = JSON.parse(localStorage.getItem("userData"));

  const userCommon = {
    user: savedUser || userData,
    rides: ridesData,
    wallet: walletData,
    offers: offersData,
    tickets: ticketsData,
    openBooking: () => setBookingOpen(true),
  };

  const driverCommon = {
    driver: driverData,
    rides: tripsData,
  };

  /* ------------ PROTECTED USER ROUTE ------------ */
  const UserProtectedRoute = ({ children }) => {
    if (!localStorage.getItem("userData")) {
      return <Navigate to="/signup" replace />;
    }
    return children;
  };

  return (
    <Routes>
      {/* ---------------- LANDING PAGE ---------------- */}
      <Route path="/" element={<LandingPage />} />

      {/* ---------------- SIGNUP / LOGIN PAGE ---------------- */}
      <Route path="/signup" element={<Signup />} />

      {/* ---------------- DRIVER LOGIN PAGE (NEW) ---------------- */}
      <Route path="/driver-login" element={<DriverLoginPage />} />

      {/* ---------------- USER DASHBOARD ---------------- */}
      <Route
        path="/user/*"
        element={
          <UserProtectedRoute>
            <div className="app-root">
              <TopNav
                user={savedUser || userData}
                onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                onOpenBooking={() => setBookingOpen(true)}
              />

              <div className="main-layout">
                <SidebarUser
                  open={sidebarOpen}
                  onOpenBooking={() => setBookingOpen(true)}
                  onNavigate={() => setSidebarOpen(false)}
                />

                <main className="main-content">
                  <div className="content-wrapper">
                    <Routes>
                      <Route index element={<Navigate to="overview" replace />} />
                      <Route path="overview" element={<DashboardOverview {...userCommon} />} />
                      <Route path="rides" element={<Rides {...userCommon} />} />
                      <Route path="wallet" element={<Wallet {...userCommon} />} />
                      <Route path="offers" element={<Offers {...userCommon} />} />
                      <Route path="profile" element={<Profile {...userCommon} />} />
                      <Route path="support" element={<Support {...userCommon} />} />
                    </Routes>
                  </div>
                </main>
              </div>

              <BookRideModal
                open={bookingOpen}
                onClose={() => setBookingOpen(false)}
                vehicles={["bike", "auto", "car"]}
              />
            </div>
          </UserProtectedRoute>
        }
      />

      {/* ---------------- DRIVER DASHBOARD ---------------- */}
      <Route path="/driver" element={<DriverLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<DriverDashboard {...driverCommon} />} />
        <Route path="trips" element={<DriverTrips {...driverCommon} />} />
        <Route path="earnings" element={<DriverEarnings />} />
        <Route path="history" element={<DriverHistory {...driverCommon} />} />
        <Route path="profile" element={<DriverProfile />} />
        <Route path="settings" element={<DriverSettings />} />
      </Route>

      {/* ---------------- ADMIN PANEL ---------------- */}
      <Route
        path="/admin/*"
        element={
          <div className="app-root">
            <NavbarAdmin />
            <SidebarAdmin />

            <main className="main-content">
              <Routes>
                <Route index element={<Navigate to="/admin/overview" replace />} />
                <Route path="overview" element={<Overview />} />
                <Route path="customers" element={<Customers />} />
                <Route path="drivers" element={<Drivers />} />
                <Route path="trips" element={<AdminTrips />} />
                <Route path="deals" element={<Deals />} />
                <Route path="promotions" element={<Promotions />} />
                <Route path="salary" element={<Salary />} />
                <Route path="revenue" element={<Revenue />} />
              </Routes>
            </main>

            <Modals />
          </div>
        }
      />

      {/* ---------------- FALLBACK ---------------- */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
