import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Shield } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <BrowserRouter>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header */}
            <div className="mb-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl font-bold gradient-text mb-4">
                MERN Stack Template
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A modern, production-ready MERN stack template with TypeScript, 
                TailwindCSS, and beautiful purple theme. Perfect for building scalable web applications.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="card p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">MongoDB</h3>
                <p className="text-gray-600">NoSQL database with Mongoose ODM for flexible data modeling.</p>
              </div>

              <div className="card p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Express.js</h3>
                <p className="text-gray-600">Fast, unopinionated web framework with comprehensive API structure.</p>
              </div>

              <div className="card p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">React</h3>
                <p className="text-gray-600">Modern React 18 with hooks, context, and TypeScript support.</p>
              </div>

              <div className="card p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Node.js</h3>
                <p className="text-gray-600">JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
              </div>

              <div className="card p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">TS</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">TypeScript</h3>
                <p className="text-gray-600">Full type safety across frontend and backend for better DX.</p>
              </div>

              <div className="card p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">UI</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">TailwindCSS</h3>
                <p className="text-gray-600">Utility-first CSS framework with custom purple theme.</p>
              </div>
            </div>

            {/* Quick Start */}
            <div className="card p-8 text-left max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Start</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <code className="text-green-400 text-sm">
                    # Clone and install dependencies<br />
                    git clone &lt;your-repo-url&gt;<br />
                    cd mern-typescript-template<br />
                    npm run install:all
                  </code>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <code className="text-green-400 text-sm">
                    # Set up environment variables<br />
                    cp server/.env.example server/.env<br />
                    # Edit server/.env with your MongoDB URI and JWT secret
                  </code>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <code className="text-green-400 text-sm">
                    # Start development servers<br />
                    npm run dev
                  </code>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="inline-flex space-x-4">
                <button 
                  onClick={() => window.open('/client', '_blank')}
                  className="btn-primary px-8 py-3 text-lg"
                >
                  View Demo
                </button>
                <button 
                  onClick={() => window.open('https://github.com', '_blank')}
                  className="btn-outline px-8 py-3 text-lg"
                >
                  View on GitHub
                </button>
              </div>
              
              <p className="mt-6 text-gray-600">
                Ready to build amazing applications? Get started with this comprehensive MERN stack template!
              </p>
            </div>
          </div>
        </div>
      </BrowserRouter>
      
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#f9fafb',
            borderRadius: '8px',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          },
          success: {
            style: {
              background: '#10b981',
            },
          },
          error: {
            style: {
              background: '#ef4444',
            },
          },
        }}
      />
    </div>
  );
};

export default App;