import LoguinPage from './components/auth/LoguinPage';
import RegisterPage from './components/auth/RegisterPage';
import ErrorPage from './components/error/ErrorPage';
import JournalPage from './components/journal/JournalPage';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <JournalPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/login",
    element: <LoguinPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/register",
    element: <RegisterPage/>,
    errorElement: <ErrorPage />,
  },
]);

const JournalApp = () => {
  return <RouterProvider router={router} />
}

export default JournalApp
