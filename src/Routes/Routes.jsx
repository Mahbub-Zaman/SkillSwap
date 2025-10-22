import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Skills from "../Pages/Skills";
import Dashboard from "../Pages/Dashboard";
import EnrolledCourse from "../Pages/EnrolledCourse";
import Profile from "../Pages/Profile";           // for profile page
import UpdateProfile from "../Pages/UpdateProfile"; // for update profile
import SignUp from "../Pages/SignUp";             // for signup
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import SkillDetails from "../Pages/SkillDetails";
import LogIn from "../Pages/login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // default page
        element: <Home />,
        loader: () => fetch('/Skills.json'), // optional
      },
      {
        path: 'Skills', // /Skills
        element: <Skills />,
      },
      {
        path: 'Skills/:skillId', // /Skills
        element: <SkillDetails />,
      },
      {
        path: 'Dashboard', // /Dashboard
        element: <Dashboard />,
      },
      {
        path: 'EnrolledCourse', // /EnrolledCourse
        element: <EnrolledCourse />,
      },
      { 
        path: 'profile', 
        element: <Profile /> 
      },
      { 
        path: 'update-profile', 
        element: <UpdateProfile /> 
      },
      { 
        path: 'login', 
        element: <LogIn /> 
      },
      { 
        path: 'signup', 
        element: <SignUp /> 
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
