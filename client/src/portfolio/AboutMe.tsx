import React, { useState, useEffect } from 'react';

// Mock config - replace with your actual config
const config = {
  bio: "I am a passionate web developer specializing in building modern, responsive, and user-friendly web applications."
};

interface AboutMeProps {
  longDescription?: boolean;
}

const AboutMe: React.FC<AboutMeProps> = ({ longDescription }) => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Statistics data
  const stats = [
    { value: 89, label: 'Adobe Photoshop', color: 'from-blue-500 to-purple-600' },
    { value: 75, label: 'UI UX Expert', color: 'from-green-500 to-blue-500' },
    { value: 67, label: 'Mobile Design', color: 'from-purple-500 to-pink-500' },
    { value: 88, label: 'Web Design', color: 'from-orange-500 to-red-500' }
  ];

  // Services data
  const services = [
    {
      icon: "📱",
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality. Your projects delivered on schedule."
    },
    {
      icon: "🎯",
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions to boost your online presence and engagement."
    },
    {
      icon: "👥",
      title: "App Development",
      description: "Custom mobile and web applications built with modern technologies and best practices."
    },
    {
      icon: "☁️",
      title: "Creative Design",
      description: "Innovative design solutions that capture your brand essence and engage your audience."
    },
    {
      icon: "📊",
      title: "SEO Marketing",
      description: "Search engine optimization strategies to improve your visibility and organic traffic."
    },
    {
      icon: "💻",
      title: "Web Development",
      description: "Full-stack web development with responsive design and optimal performance."
    }
  ];

  // Counter animation hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return count;
  };

  const CircularProgress = ({ value, label }: { value: number; label: string }) => {
    const animatedValue = useCounter(value);
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (animatedValue / 100) * circumference;

    return (
      <div className="flex flex-col items-center group cursor-pointer transform transition-all duration-300 hover:scale-110">
        <div className="relative w-32 h-32 mb-4">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-gray-300 dark:text-gray-600"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#gradient)"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className="text-emerald-400" stopColor="currentColor" />
                <stop offset="100%" className="text-emerald-600" stopColor="currentColor" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-emerald-400">{animatedValue}%</span>
          </div>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-300 text-center font-medium group-hover:text-emerald-400 transition-colors">
          {label}
        </span>
      </div>
    );
  };

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <div 
      className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6 backdrop-blur-sm border border-emerald-500/30">
            Welcome to my portfolio
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
            An Expert Digital Marketing
            <br />
            Product Designer
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            {longDescription
              ? `I am a passionate web developer specializing in building modern, responsive, and user-friendly web applications. My focus is on delivering high-quality solutions that solve real-world problems, with a keen eye for design and usability.`
              : config.bio}
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
            Download CV
          </button>
        </div>

        {/* Profile Section */}
        <div className={`flex flex-col lg:flex-row items-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl p-1 backdrop-blur-sm border border-emerald-500/30">
                <div className="w-full h-full bg-gray-800/50 rounded-2xl flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-2xl animate-bounce">
                ✨
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-3xl font-bold mb-6 text-emerald-400">Why Hire Me For Your Next Project?</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I bring a unique combination of technical expertise and creative vision to every project. With years of experience in modern web technologies and a passion for creating exceptional user experiences, I deliver solutions that not only meet your requirements but exceed your expectations.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-300">
                  <span className="text-emerald-400 mr-3">✓</span>
                  Expert in modern frameworks and technologies
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-emerald-400 mr-3">✓</span>
                  Responsive and mobile-first design approach
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-emerald-400 mr-3">✓</span>
                  SEO optimization and performance focus
                </li>
              </ul>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Hire Me Now
              </button>
            </div>
          </div>
        </div>

        {/* Skills Statistics */}
        <div className={`mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <CircularProgress
                key={index}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className={`mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '900ms' }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
              Service And Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Achievement Numbers */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1200ms' }}>
          {[
            { number: 5870, label: 'Project Completed' },
            { number: 8450, label: 'Happy Clients' },
            { number: 760, label: 'Coffee Cups' },
            { number: 450, label: 'Real Professionals' }
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="text-4xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform">
                {useCounter(item.number).toLocaleString()}+
              </div>
              <div className="text-gray-400 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutMe;