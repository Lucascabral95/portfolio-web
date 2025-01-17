import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'
import PublicRoutes from './Routes/PublicRoutes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
