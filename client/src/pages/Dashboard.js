import React from "react";
import Layout from "../components/Layout/Layout";
import { FaUsers, FaClipboardList, FaBriefcase, FaChartBar } from "react-icons/fa";

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard-container">
        {/* Topbar */}
        <div className="dashboard-header">
          <h2>Welcome to Dashboard</h2>
        </div>

        {/* Dashboard Widgets */}
        <div className="dashboard-widgets">
          <div className="widget-card">
            <FaUsers className="widget-icon" />
            <h3>1,234</h3>
            <p>Users Registered</p>
          </div>

          <div className="widget-card">
            <FaClipboardList className="widget-icon" />
            <h3>567</h3>
            <p>Job Listings</p>
          </div>

          <div className="widget-card">
            <FaBriefcase className="widget-icon" />
            <h3>432</h3>
            <p>Active Employers</p>
          </div>

          <div className="widget-card">
            <FaChartBar className="widget-icon" />
            <h3>92%</h3>
            <p>Hiring Success Rate</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
