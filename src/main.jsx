import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddTips from './components/AddTips.jsx';
import UpdateTips from './components/UpdateTips.jsx';


import ShareTip from './components/ShareTip.jsx';
import TipCard from './components/TipCard.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ExploreGardeners from './components/ExploreGardeners.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';


import BrowseTips from './components/BrowseTips.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import TipDetails from './components/TipsDetails.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import MyTips from './components/MyTips.jsx';
import UpdateTip from './components/UpdateTip.jsx';
import AboutUs from './components/AboutUs.jsx';
import TermsOfService from './components/TermsOfService.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import CookiePolicy from './components/CookiePolicy.jsx';
import Dashboard from './components/Dashboard.jsx';
import Overview from './components/Overview.jsx';


const router = createBrowserRouter([
  {
    path: "/",
   Component: MainLayout,
   errorElement: <ErrorPage></ErrorPage>,
   children: [
    {
      index: true,
      Component: Home,
      loader: ()=> fetch('https://gardening-hub-server-seven.vercel.app/tips'),
      hydrateFallbackElement: <div className="text-xl font-bold mx-auto justify-center">Loading.......</div>
    },
    {
      path: 'gardeners',
      Component: ExploreGardeners
    },
   
    {
path: "/about",
Component: AboutUs
    },
    {
      path: "/terms",
      Component: TermsOfService
          },

          {
            path: "/privacy",
            Component: PrivacyPolicy
                },
                {
                  path: "/cookie",
                  Component: CookiePolicy
                      },
    {
path: 'addTips',
Component: AddTips


    },
    {

      path: 'updateTips',
      Component: UpdateTips
    },
   
  
    
  
    {
      path: 'shareTip',
      Component: ShareTip
    },
    {
      path: "/tips/:id",
      element: <PrivateRoute><TipDetails /></PrivateRoute>,
      loader: ({ params }) =>
        fetch(`https://gardening-hub-server-seven.vercel.app/tips/${params.id}`),
      hydrateFallbackElement: <div className="text-xl font-bold mx-auto justify-center">Loading.......</div>
    },
    
    { 
      path: '/my-tips', 
      element: 
        <PrivateRoute>
          <MyTips />
        </PrivateRoute>
      
    },
    {
      path: '/update-tip/:id',
      element: <PrivateRoute><UpdateTip /></PrivateRoute>
    },
    
    {
path: 'login',
Component: Login
    },
    {
      path: 'register',
      Component: Register
    },
    {
      path: "/browse-tips",
      Component: BrowseTips, 
      loader: () => fetch('https://gardening-hub-server-seven.vercel.app/tips'),
      hydrateFallbackElement: <div className="text-xl font-bold mx-auto justify-center">Loading.......</div>
    },
    
   
   ]
  },


  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      { index: true, Component: Overview },
      { path: 'browse-tips', Component: BrowseTips, loader: () => fetch('https://gardening-hub-server-seven.vercel.app/tips') },
      { path: 'share-tip', Component: ShareTip },
      { path: 'my-tips', Component: MyTips },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>

  </StrictMode>,
)
