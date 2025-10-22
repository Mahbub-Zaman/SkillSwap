import React from 'react';
import Chart from '../components/DashBoard/Chart';
import DashboardSkills from '../components/DashBoard/DashboardSkills';

const Dashboard = () => {
  return (
    <div>
      <DashboardSkills />
      <Chart />
    </div>
  );
};

export default Dashboard;