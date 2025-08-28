import React from 'react';
import config from '../portfolio.config.json';

const Hero: React.FC = () => (
  <section className="flex flex-col items-center justify-center text-center py-12 md:py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white rounded-2xl shadow-lg mb-12">
    <img
      src={config.avatar || 'https://avatars.githubusercontent.com/u/1?v=4'}
      alt={config.name}
      className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6 object-cover"
    />
    <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">{config.name}</h1>
    <h2 className="text-xl md:text-2xl font-medium mb-4 opacity-80">{config.title || 'Web Developer & Designer'}</h2>
    <p className="max-w-xl mx-auto text-lg md:text-xl opacity-90">{config.bio}</p>
  </section>
);

export default Hero;
