import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Opleiding from './paginas/Opleiding';
import Vakken from './paginas/Vakken';
import Skills from './paginas/Skills';
import Werk from './paginas/Werk';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './modes/DarkMode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Opleiding" element={<Opleiding />} />
          <Route path="/Vakken" element={<Vakken />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Werk" element={<Werk />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();