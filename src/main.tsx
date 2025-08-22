import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AboutMe from './pages/AboutMe';
import { appRoutes } from './data/constants';
import OtherProjectsPage from './pages/OtherProjects';
import HomePage from './pages/Homepage';
import OtherProjectDetailPage from './pages/OtherProjectsDetails';
import ProjectPage from './pages/Projects';


const router = createBrowserRouter([
  {
    path: appRoutes.HOME,
    element: <HomePage />,
  },
  {
    path: appRoutes.ABOUT_ME,
    element: <AboutMe />,
  },
  {
    path: appRoutes.OTHER_PROJECTS,
    element: <OtherProjectsPage />,
  },
  {
    path: appRoutes.OTHER_PROJECT_DETAIL,
    element: <OtherProjectDetailPage />,
  },
  {
    path: appRoutes.PROJECT,
    element: <ProjectPage />,
  }

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
