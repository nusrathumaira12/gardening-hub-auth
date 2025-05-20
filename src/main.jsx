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
      path: 'addGardener',
      Component: AddGardener
    },
    {
      path: 'shareTip',
      Component: ShareTip
    },
   
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />

  </StrictMode>,
)
