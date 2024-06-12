import React from "react";
import MainLayout from "../layout/MainLayout";
import Events from "../components/swimmingEvents/Events";
import EventDetail from "../components/swimmingEvents/EventDetail";

const HomePage = () => {
  return (
    <MainLayout>
      <Events />
    </MainLayout>
  );
};

export default HomePage;
