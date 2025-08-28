import React from 'react';

const skills = [
  'React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'
];

const projects = [
  'Auto Part Navigator',
  'Melody Mart',
  'BookVerse',
  'TaskFlow'
];

const Skills: React.FC = () => (
  <div className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-colors duration-300">
    <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">Skills</h2>
    <ul className="flex flex-wrap gap-3 mb-6">
      {skills.map((skill, idx) => (
        <li key={idx} className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-base font-medium shadow">
          {skill}
        </li>
      ))}
    </ul>
    <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-300">Projects</h3>
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
      {projects.map((project, idx) => (
        <li key={idx}>{project}</li>
      ))}
    </ul>
  </div>
);

export default Skills;
