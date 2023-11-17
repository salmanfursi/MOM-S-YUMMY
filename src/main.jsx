import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from "react-router-dom";
import { router } from './Routes/Routes';
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <div className='max-w-screen-xl mx-auto'>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
    </AuthProvider>
  </React.StrictMode>
);