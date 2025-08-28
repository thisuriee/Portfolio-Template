import React from 'react';

const projects = [
  {
    title: 'Auto Part Navigator',
    description: 'A platform to search and compare auto parts from multiple vendors.',
    link: '#'
  },
  {
    title: 'Melody Mart',
    description: 'An e-commerce site for musical instruments and accessories.',
    link: '#'
  },
  {
    title: 'BookVerse',
    description: 'A social platform for book lovers to share and review books.',
    link: '#'
  },
  {
    title: 'TaskFlow',
    description: 'A productivity app for managing tasks and projects efficiently.',
    link: '#'
  }
];

const Projects: React.FC = () => (
  <div className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-colors duration-300">
    <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, idx) => (
        <div key={idx} className="p-4 border dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-900 transition-colors duration-300">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
          <p className="mb-2 text-gray-600 dark:text-gray-300">{project.description}</p>
          <a href={project.link} className="text-purple-600 dark:text-purple-300 hover:underline">View Project</a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
