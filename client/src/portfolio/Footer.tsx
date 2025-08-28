import React from 'react';

const Footer: React.FC = () => (
  <footer className="py-6 text-center text-gray-500 dark:text-gray-400 text-sm mt-12 border-t dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300 rounded-b-2xl">
    &copy; {new Date().getFullYear()} Auto Part Navigator Portfolio. All rights reserved.
  </footer>
);

export default Footer;
