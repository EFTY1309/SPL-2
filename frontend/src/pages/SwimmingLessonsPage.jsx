import React from 'react';
import MainLayout from '../layout/MainLayout';
import SwimmingLessons from '../components/lesson/SwimmingLessons';

const SwimmerDashboard = () => {
  return (
    <MainLayout>
      <SwimmingLessons />
    </MainLayout>
  );
};

export default SwimmerDashboard;