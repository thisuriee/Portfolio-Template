import React from 'react';
import config from '../portfolio.config.json';
import Header from './Header';
import Footer from './Footer';

const HomePage: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <Header />
    <main className="flex-1 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in">
        <img
          src={config.avatar}
          alt={config.name}
          className="w-40 h-40 rounded-full border-4 border-purple-600 shadow-lg mb-6 animate-pulse"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300 mb-2 animate-slide-up">
          {config.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 animate-slide-up">
          {config.title}
        </h2>
        <p className="max-w-xl text-center text-lg text-gray-700 dark:text-gray-200 animate-fade-in">
          {config.bio}
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default HomePage;
