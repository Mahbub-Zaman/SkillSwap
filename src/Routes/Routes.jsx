import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../Routes/PrivateRoute";

// Pages
import Home from "../Pages/Home";
import Skills from "../Pages/Skills";
import Dashboard from "../Pages/Dashboard";
import EnrolledCourse from "../Pages/EnrolledCourse"
import Profile from "../Pages/Profile";
import UpdateProfile from "../Pages/UpdateProfile";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import ResetPassword from "../Pages/ForgotPassword";
import FAQPage from "../Pages/Faq";
import SkillDetails from "../Pages/SkillDetails";
import ErrorPage from "../Pages/ErrorPage";

// Layout
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      // Home page (default)
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/Skills.json"),
      },

      // Public pages
      { path: "skills", element: <Skills /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "forgot-password", element: <ResetPassword /> },
      { path: "faq", element: <FAQPage /> },

      // Protected routes
      {
        path: "skills/:skillId",
        element: (
          <PrivateRoute>
            <SkillDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/EnrolledCourse",
        element: (
          <PrivateRoute>
            <EnrolledCourse />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },

  // Catch-all route for undefined URLs
  { path: "*", element: <ErrorPage /> },
]);

export default router;
