import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from "react-router-dom";
import { router } from './Routes/Routes';
import './index.css'
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  </React.StrictMode>
);