import React from "react";
import ReactDOM from "react-dom/client";
import './App.css'; 
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.css";
import Courses from "./pages/CoursesPage.jsx";
import SignIn from "./pages/SignInPage.jsx";
import Register from "./pages/RegisterPage.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)