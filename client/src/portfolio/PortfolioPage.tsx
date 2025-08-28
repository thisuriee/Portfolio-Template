
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { useDarkMode } from '../hooks/useDarkMode';

const PortfolioPage: React.FC = () => {
  useDarkMode(); // just to initialize effect, don't use isDark for class
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto w-full p-6 bg-white dark:bg-gray-800 transition-colors duration-300 rounded-b-2xl">
        <section id="about"><AboutMe /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
