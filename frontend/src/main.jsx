// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import './App.css'; 
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AuthProvider } from "./context/AuthContext";
import Courses from "./pages/CoursesPage.jsx";
import SignIn from "./pages/SignInPage.jsx";
import Register from "./pages/RegisterPage.jsx";
import Dashboard from "./pages/SwimmerDashboard.jsx";
import Profile from "./pages/ProfilePage.jsx";
import UpdateProfile from "./pages/UpdateProfilePage.jsx";
import ContactUs from "./pages/ContactUsPage.jsx";
import AboutUs from "./pages/AboutUsPage.jsx";
import MySchedule from "./pages/MySchedulePage.jsx";
import MyCourses from "./pages/MyCoursesPage.jsx";
import SwimmingLessons from "./pages/SwimmingLessonsPage.jsx";
import Events from "./pages/EventsPage.jsx";
import Payment from "./pages/PaymentPage.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PaymentSuccess from "./components/payment/PaymentSuccess.jsx";
import PaymentFail from "./components/payment/PaymentFail.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "courses",
    element: <Courses />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: <PrivateRoute element={<Dashboard />} />,
  },
  {
    path: "profile",
    element: <PrivateRoute element={<Profile />} />,
  },
  {
    path: "update-profile",
    element: <PrivateRoute element={<UpdateProfile />} />,
  },
  {
    path: "contact-us",
    element: <ContactUs />,
  },
  {
    path: "about",
    element: <AboutUs />,
  },
  {
    path: "my-schedule",
    element: <PrivateRoute element={<MySchedule />} />,
  },
  {
    path: "my-courses",
    element: <PrivateRoute element={<MyCourses />} />,
  },
  {
    path: "swimming-lessons",
    element: <SwimmingLessons />,
  },
  {
    path: "events",
    element: <Events />,
  },
  {
    path: "payment",
    element: <Payment />,
  },
  {
    path: "payment-success",
    element: <PaymentSuccess />,
  },
  {
    path: "payment-fail",
    element: <PaymentFail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
