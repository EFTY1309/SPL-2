import React from "react";
import ReactDOM from "react-dom/client";
import './App.css'; 
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.css";
/* slick-carousel styles */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
    element: <Dashboard />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "update-profile",
    element: <UpdateProfile />,
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
    element: <MySchedule />,
  },
  {
    path: "my-courses",
    element: <MyCourses />,
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)