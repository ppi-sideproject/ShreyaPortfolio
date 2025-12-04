import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ProjectPage from './landing_page/project/ProjectPage';
import ContactPage from './landing_page/contact/ContactPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/project' element={<ProjectPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
    <Footer />
  </HashRouter>
);
