import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ProjectPage from './landing_page/project/ProjectPage';
import ContactPage from './landing_page/contact/ContactPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <HomePage />
    <AboutPage />
    <ProjectPage />
    <ContactPage />
    <Footer />
  </React.StrictMode>
);


