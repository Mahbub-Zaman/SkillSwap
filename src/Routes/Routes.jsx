import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Skills from "../Pages/Skills"; // <-- new page
import Dashboard from "../Pages/Dashboard"; // <-- new page
import EnrolledCourse from "../Pages/EnrolledCourse"; // <-- new page
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";

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
        path: 'Dashboard', // /Dashboard
        element: <Dashboard />,
      },
      {
        path: 'EnrolledCourse', // /EnrolledCourse
        element: <EnrolledCourse />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
