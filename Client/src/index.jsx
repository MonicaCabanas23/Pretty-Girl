import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from './Contexts/ConfigContext';
import { UserProvider } from './Contexts/UserContext';
import axios from 'axios';
import { UserProvider } from './Contexts/UserContext';

axios.defaults.baseURL = import.meta.env.VITE_API || "https://prettygirl-api-production.up.railway.app/"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <ConfigProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ConfigProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
