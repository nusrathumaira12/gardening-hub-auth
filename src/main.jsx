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
import AddGardener from './components/AddGardener.jsx';
import ActiveGardener from './components/ActiveGardener.jsx';
import ShareTip from './components/ShareTip.jsx';
import TipCard from './components/TipCard.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ExploreGardeners from './components/ExploreGardeners.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import FeaturedGardeners from './components/FeaturedGardeners.jsx';

const router = createBrowserRouter([
  {
    path: "/",
   Component: MainLayout,
   children: [
    {
      index: true,
      loader: ()=> fetch('http://localhost:3000/tips'),
      Component: Home
    },
    {
      path: 'explore-gardeners',
      Component: ExploreGardeners
    },
    {
      path: 'browseTips',
      Component: TipCard
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
      path: 'activeGardener',
      Component: ActiveGardener
    },
    {
path: '/',
Component: FeaturedGardeners

    },
    {
      path: 'addGardener',
      Component: AddGardener
    },
    {
      path: 'shareTip',
      Component: ShareTip
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
