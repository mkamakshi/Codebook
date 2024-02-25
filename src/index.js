import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { FilterProvider, CartProvider } from './context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <ToastContainer closeButton={false} autoClose={3000} position={"top-right"} />
     <FilterProvider> 
     <CartProvider> 
     <App />
     </CartProvider>
     </FilterProvider>
     
    </Router>
  </React.StrictMode>
);