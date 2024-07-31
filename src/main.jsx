import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navigation from './pages/navigation.jsx'
import Home from './pages/home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Navigation />
   <Home/>
    <App />
  </React.StrictMode>,
)
