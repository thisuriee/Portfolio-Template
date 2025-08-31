import React, { useState, useEffect, useRef } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, Code, Palette, Smartphone, Globe, MessageSquare, Download, Star, ArrowRight, Play } from 'lucide-react';

// Import your config object (adjust the path as needed)
import config from '../portfolio.config.json';


const HomePage = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useDarkMode();

  // Ensure <html> gets the dark class for Tailwind dark mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for active section tracking
  useEffect(() => {
    const sections = [
      { ref: heroRef, id: 'hero' },
      { ref: aboutRef, id: 'about' },
      { ref: projectsRef, id: 'projects' },
      { ref: skillsRef, id: 'skills' },
      { ref: contactRef, id: 'contact' }
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
  }

  const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!isVisible) return;
      
      let startTime: number | undefined;
      const animate = (timestamp: number) => {
        if (startTime === undefined) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return <span ref={ref}>{count}{suffix}</span>;
  };

  const FloatingNav = () => (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
        {['hero', 'about', 'projects', 'skills', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(
              section === 'hero' ? heroRef :
              section === 'about' ? aboutRef :
              section === 'projects' ? projectsRef :
              section === 'skills' ? skillsRef : contactRef
            )}
            className={`block w-3 h-3 rounded-full m-2 transition-all duration-300 ${
              activeSection === section 
                ? 'bg-emerald-400 scale-150' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to ${section}`}
          />
        ))}
      </div>
    </nav>
  );

  return (
  <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:text-gray-100 overflow-x-hidden min-h-screen">
      {/* Header with theme toggle */}
      <header className="w-full flex justify-end items-center px-8 py-4 absolute top-0 left-0 z-50">
        <button
          onClick={() => setIsDark((prev: boolean) => !prev)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 shadow-lg"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <span className="flex items-center"><Palette className="w-5 h-5 mr-1" /> Light Mode</span>
          ) : (
            <span className="flex items-center"><Palette className="w-5 h-5 mr-1" /> Dark Mode</span>
          )}
        </button>
      </header>

      <FloatingNav />

      {/* Dynamic cursor effect */}
      <div
        className="fixed w-6 h-6 rounded-full bg-emerald-400/30 pointer-events-none z-50 mix-blend-difference transition-all duration-150"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 relative">
            <img
              src={config.avatar}
              alt={config.name}
              className="w-32 h-32 rounded-full mx-auto border-4 border-emerald-400/50 shadow-2xl hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center animate-bounce">
              <Star className="w-4 h-4 text-slate-900" />
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="inline-block px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-300 text-sm font-medium backdrop-blur-sm border border-emerald-500/30">
              👋 Welcome to my portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                {config.name}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-6">
              {config.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {config.bio}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection(projectsRef)}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              View My Work
            </button>
            <button className="border-2 border-white/30 hover:border-emerald-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: config.contact.github },
              { icon: Linkedin, href: config.contact.linkedin },
              { icon: Mail, href: `mailto:${config.contact.email}` }
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <button 
          onClick={() => scrollToSection(aboutRef)}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">My Journey</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate developer with over 5 years of experience creating digital solutions that make a difference. My journey started with curiosity about how websites work, and it has evolved into a love for building exceptional user experiences.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in modern web technologies and have a keen eye for design. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-xl p-6 text-center border border-emerald-500/30">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-6 text-center border border-purple-500/30">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    <AnimatedCounter end={5} suffix="+" />
                  </div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-400/20 to-purple-400/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-emerald-400">What I Do</h3>
                <div className="space-y-4">
                  {[
                    { icon: Code, title: "Web Development", desc: "Full-stack development with modern frameworks" },
                    { icon: Palette, title: "UI/UX Design", desc: "Creating beautiful and intuitive interfaces" },
                    { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform mobile app development" },
                    { icon: Globe, title: "Web Optimization", desc: "Performance optimization and SEO" }
                  ].map(({ icon: Icon, title, desc }, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{title}</h4>
                        <p className="text-gray-400 text-sm">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <a
                    href={project.link}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-emerald-500/30"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-full flex items-center justify-center border border-emerald-500/30 group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {skill}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-emerald-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Always Learning</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. 
                I regularly explore new frameworks, tools, and methodologies to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-br from-emerald-900/20 to-purple-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-emerald-400">Get in Touch</h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${config.contact.email}`}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-gray-400">{config.contact.email}</div>
                    </div>
                  </a>
                  
                  <a
                    href={config.contact.linkedin}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Linkedin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">LinkedIn</div>
                      <div className="text-gray-400">Connect with me</div>
                    </div>
                  </a>
                  
                  <a
                    href={config.contact.github}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Github className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">GitHub</div>
                      <div className="text-gray-400">Check out my code</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-emerald-500 focus:outline-none text-white placeholder-gray-400 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-emerald-500 focus:outline-none text-white placeholder-gray-400 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-emerald-500 focus:outline-none text-white placeholder-gray-400 resize-none backdrop-blur-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 {config.name}. Made with ❤️ using React & TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;