import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'
import PublicRoutes from './Routes/PublicRoutes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
