import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
const CLIENT_ID = "AYhQNzep9ClQagk2tMqVhZJhNmZkdL6dvsZzdS7eFnNbg_DT-jIzfMcm4gxVhj3YlEtZYV8yx7-zN3kQ"; 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <PayPalScriptProvider options={{ clientId: CLIENT_ID }}>
    <App />
  </PayPalScriptProvider>,
  </React.StrictMode>,
)
