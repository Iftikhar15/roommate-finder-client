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
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import BrowseListings from './Pages/BrowseListings.jsx';
import Whyus from './Pages/Whyus.jsx';
import FindMate from './Pages/FindMate.jsx';
import MyListings from './Pages/MyListings.jsx';
import Profile from './Pages/Profile.jsx';
import Error from './Pages/Error.jsx';
import PostDetails from './Pages/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/roommates'),
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'browselinstings',
        element: <BrowseListings />
      },
      {
        path: 'why-us',
        element: <Whyus />
      },
      {
        path: 'findRoommate',
        element: <FindMate />
      },
      {
        path: 'mylistings',
        element: <MyListings />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'postDetails/:_id',
        loader: ({ params }) =>
          fetch(`http://localhost:3000/roommates/${params._id}`),
        element: <PostDetails />
      },

      {
        path: '*',
        element: <Error />
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
