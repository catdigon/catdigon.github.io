import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Homepage';
import AboutMe from './pages/AboutMe';
import { appRoutes } from './data/constants';



const router = createBrowserRouter([
  {
    path: appRoutes.HOME,
    element: <Home />,
  },
  {
    path: appRoutes.ABOUT_ME,
    element: <AboutMe />,
  }

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
