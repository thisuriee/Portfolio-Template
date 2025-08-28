import React from 'react';
import AboutMe from './AboutMe';
import Header from './Header';
import Footer from './Footer';

const AboutPage: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <Header />
    <main className="flex-1 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full p-6 bg-white dark:bg-gray-800 rounded-xl shadow transition-colors duration-300 mt-8">
        <AboutMe longDescription />
      </div>
    </main>
    <Footer />
  </div>
);

export default AboutPage;
