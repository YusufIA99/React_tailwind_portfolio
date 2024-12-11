import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Navigation from './pages/navigation.jsx';
import Home from './pages/home.jsx';
import Projects from './pages/projects.jsx';
import Contact from './pages/contact.jsx';
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './pages/themecontext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/app" element={<App />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);