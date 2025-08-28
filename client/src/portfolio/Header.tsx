

import React from 'react';
import config from '../portfolio.config.json';
import { useDarkMode } from '../hooks/useDarkMode';
import { Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isDark, setIsDark] = useDarkMode();
  const location = useLocation();
  return (
    <header className={
      `flex items-center justify-between py-6 px-4 md:px-8 shadow rounded-t-2xl ` +
      (isDark ? 'bg-gray-900' : 'bg-white')
    }>
      <div className="flex items-center gap-4">
        <img
          src={config.avatar}
          alt={config.name}
          className="w-12 h-12 rounded-full border-2 border-purple-600 object-cover"
        />
        <div>
          <h1 className={isDark ? "text-2xl font-bold text-purple-300" : "text-2xl font-bold text-purple-700"}>{config.name}</h1>
          <span className={isDark ? "text-sm text-gray-400" : "text-sm text-gray-500"}>{config.title}</span>
        </div>
      </div>
      <nav className="flex gap-6 items-center">
        <Link to="/about" className={location.pathname === '/about' ? 'text-purple-700 dark:text-purple-300 font-bold underline' : (isDark ? 'text-gray-200 hover:text-purple-300 font-medium' : 'text-gray-700 hover:text-purple-700 font-medium')}>About Me</Link>
        <Link to="/skills" className={location.pathname === '/skills' ? 'text-purple-700 dark:text-purple-300 font-bold underline' : (isDark ? 'text-gray-200 hover:text-purple-300 font-medium' : 'text-gray-700 hover:text-purple-700 font-medium')}>Skills</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'text-purple-700 dark:text-purple-300 font-bold underline' : (isDark ? 'text-gray-200 hover:text-purple-300 font-medium' : 'text-gray-700 hover:text-purple-700 font-medium')}>Contact</Link>
        <button
          aria-label="Toggle dark mode"
          onClick={() => setIsDark((d: boolean) => !d)}
          className="ml-4 p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
