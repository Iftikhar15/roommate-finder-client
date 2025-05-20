import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AuthProvider from './Contexts/AuthProvider.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'; 
import Home from './components/Home/Home.jsx';

import Root from './Layouts/Root.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>, 
    children: [
      {
        index: true,
        element: <Home />
      }
      
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>
);
