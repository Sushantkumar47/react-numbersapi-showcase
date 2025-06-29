import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles.css'; // ✅ Import the CSS
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <ToastContainer position="top-right" autoClose={2000} />
  </React.StrictMode>
);