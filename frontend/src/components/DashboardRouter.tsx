import { useAuth } from '../context/AuthContext';
import NurseDashboard from './dashboards/NurseDashboard';
import DoctorDashboard from './dashboards/DoctorDashboard';
import PatientDashboard from './dashboards/PatientDashboard';
import React from 'react';

const DashboardRouter: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  switch (user.role) {
    case 'nurse':
      return <NurseDashboard />;
    case 'doctor':
      return <DoctorDashboard />;
    case 'patient':
      return <PatientDashboard />;
    default:
      return <div>Invalid user role</div>;
  }
};

export default DashboardRouter;
