import React from 'react';
import config from '../portfolio.config.json';

interface AboutMeProps {
  longDescription?: boolean;
}

const AboutMe: React.FC<AboutMeProps> = ({ longDescription }) => (
  <div className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-colors duration-300">
    <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">About Me</h2>
    <p className="text-gray-700 dark:text-gray-200">
      {longDescription
        ? `I am a passionate web developer specializing in building modern, responsive, and user-friendly web applications. My focus is on delivering high-quality solutions that solve real-world problems, with a keen eye for design and usability. I have experience in a wide range of technologies and enjoy learning new tools and frameworks. I believe in continuous improvement and strive to write clean, maintainable code. In my free time, I contribute to open source and mentor aspiring developers.`
        : config.bio}
    </p>
  </div>
);

export default AboutMe;
