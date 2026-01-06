import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import AboutMe from './pages/AboutMe';
import { appRoutes } from './data/constants';
import OtherProjectsPage from './pages/OtherProjects';
import HomePage from './pages/Homepage';
import OtherProjectDetailPage from './pages/OtherProjectsDetails';
import ProjectCinemateca from './pages/ProjectCinemateca';
import ProjectNotifications from './pages/ProjectNotifications';
import PageLayout from './components/PageLayout/PageLayout';
import ProjectPortalFelix from './pages/ProjectPortal Félix';

const router = createBrowserRouter([
  { 
  element: <PageLayout children={undefined} />,
  children: [
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
      path: appRoutes.CINEMATECA,
      element: <ProjectCinemateca />,
    },
    {
      path: appRoutes.PORTAL_FELIX,
      element: <ProjectPortalFelix />,
    },
    {
      path: appRoutes.IMPACT_NOTIFICATIONS,
      element: <ProjectNotifications />,
    }
  ]
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
