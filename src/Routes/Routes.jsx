import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home"
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
        {
        index: true, /* path: '/' or index:true diye default page set kora jai */
        element: <Home />,
        loader: () => fetch('/Skills.json')
        },
    ]
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
])

export default router 