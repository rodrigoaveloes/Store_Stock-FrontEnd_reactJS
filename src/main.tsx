import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav/>
    <App />
    <Footer/>
  </BrowserRouter>    
  </React.StrictMode>
)