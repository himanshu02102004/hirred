
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/Landing';
import Onboarding from './pages/onboarding';
import JobListing from './pages/job-listing';
import JobPages from './pages/job';
import PostJob from './pages/post-job';
import SavedJobs from './pages/saved-job';
import MyJobs from './pages/my-jobs';
import { ThemeProvider } from './components/theme-provider';
import ProtectedRoute from './components/protected-route';


import Home from "./pages/home"; // Adjust paths as per your folder structure
import About from "./pages/about";
import Contact from "./pages/contact";
import Service from "./pages/service";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      { path: "/", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Services", element: <Service /> },
      {
        path: "/onboarding",
        element:(
          <ProtectedRoute>
             <Onboarding />
          </ProtectedRoute>
        
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        
        ),
      },
      {
        path: "/job/:id",

        element: (
          <ProtectedRoute>
             <JobPages />
          </ProtectedRoute>
         
        ),
      },
      {
        path: "/post-job",

        element: (
        <ProtectedRoute>
          <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: 
        (
        <ProtectedRoute>
         <SavedJobs /> </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs", 
        element: (
        <ProtectedRoute>
          <MyJobs />
        </ProtectedRoute>
        
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
