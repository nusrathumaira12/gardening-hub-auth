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


const router = createBrowserRouter([
  {
    path: "/",
   Component: MainLayout,
   errorElement: <ErrorPage></ErrorPage>,
   children: [
    {
      index: true,
      Component: Home,
      loader: ()=> fetch('http://localhost:3000/tips'),
      hydrateFallbackElement: <div className="text-xl font-bold mx-auto justify-center">Loading.......</div>
    },
    {
      path: 'gardeners',
      Component: ExploreGardeners
    },
    {
      path: "/browse-tips",
     Component: BrowseTips,
      loader:  () => fetch('http://localhost:3000/tips'),
      hydrateFallbackElement: <div className="text-xl font-bold mx-auto justify-center">Loading.......</div>
      
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
        fetch(`http://localhost:3000/tips/${params.id}`),
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
    }
   
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>

  </StrictMode>,
)
