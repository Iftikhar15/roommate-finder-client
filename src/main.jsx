import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import AuthProvider from './Contexts/AuthProvider.jsx';
import './index.css';
import Spinner from './components/Spinner/Spinner.jsx';

// Lazy load all components
const Root = lazy(() => import('./Layouts/Root.jsx'));
const Home = lazy(() => import('./components/Home/Home.jsx'));
const Login = lazy(() => import('./Pages/Login.jsx'));
const Register = lazy(() => import('./Pages/Register.jsx'));
const BrowseListings = lazy(() => import('./Pages/BrowseListings.jsx'));
const Whyus = lazy(() => import('./Pages/Whyus.jsx'));
const FindMate = lazy(() => import('./Pages/FindMate.jsx'));
const MyListings = lazy(() => import('./Pages/MyListings.jsx'));
const Profile = lazy(() => import('./Pages/Profile.jsx'));
const Error = lazy(() => import('./Pages/Error.jsx'));
const PostDetails = lazy(() => import('./Pages/PostDetails.jsx'));
const UpdatePage = lazy(() => import('./Pages/UpdatePage.jsx'));

// Create routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        loader: () => fetch('https://roommate-finder-server-zeta.vercel.app/roommates?isAvailable=true'),
        element:
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>,
      },
      {
        path: 'login',
        element:
          <Suspense fallback={<Spinner />}>
            <Login />
          </Suspense>,

      },
      {
        path: 'register',
        element:
          <Suspense fallback={<Spinner />}>
            <Register />
          </Suspense>,
      },
      {
        path: 'browselinstings',
        loader: () => fetch('https://roommate-finder-server-zeta.vercel.app/roommates'),
        element:
          <Suspense fallback={<Spinner />}>
            <BrowseListings />
          </Suspense>,
      },
      {
        path: 'why-us',
        element:
          <Suspense fallback={<Spinner />}>
            <Whyus />
          </Suspense>,
      },
      {
        path: 'findRoommate',
        element:
          <Suspense fallback={<Spinner />}>
            <FindMate />
          </Suspense>,
      },
      {
        path: 'mylistings',
        element:
           <Suspense fallback={<Spinner />}>
            <MyListings />
          </Suspense>,
      },
      {
        path: 'profile',
        element: 
          <Suspense fallback={<Spinner />}>
            <Profile />
          </Suspense>,
      },
      {
        path: 'postDetails/:_id',
        loader: () => fetch('https://roommate-finder-server-zeta.vercel.app/roommates'),
        element:
          <Suspense fallback={<Spinner />}>
            <PostDetails />
          </Suspense>,
      },
      {
        path: 'update-listing/:id',
        loader: () => fetch('https://roommate-finder-server-zeta.vercel.app/roommates'),
        element:
          <Suspense fallback={<Spinner />}>
            <UpdatePage />
          </Suspense>,
      },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
  </StrictMode>
);
