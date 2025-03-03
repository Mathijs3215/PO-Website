import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { useTheme } from './modes/DarkMode';
import image1 from './image1.jpg';
import image2 from './cute.png';

function App() {
  const { donkereModus, toggleTheme } = useTheme();
  const navigate = useNavigate();
  
  return (
    <div className={`min-h-screen ${donkereModus ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 via-white to-gray-200'} transition-colors duration-500`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${donkereModus ? 'bg-blue-900/20' : 'bg-green-200/40'} blur-3xl`}></div>
        <div className={`absolute top-1/3 -left-40 w-80 h-80 rounded-full ${donkereModus ? 'bg-green-900/20' : 'bg-blue-200/40'} blur-3xl`}></div>
        <div className={`absolute -bottom-20 right-1/3 w-72 h-72 rounded-full ${donkereModus ? 'bg-cyan-900/20' : 'bg-cyan-200/40'} blur-3xl`}></div>
      </div>
      
      {/* Dark mode toggle */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full transition-all duration-300 ${
            donkereModus 
              ? 'bg-gray-800 text-gray-200 shadow-lg shadow-cyan-500/20' 
              : 'bg-white text-gray-800 shadow-lg'
          }`}
          aria-label={donkereModus ? "Schakel naar lichte modus" : "Schakel naar donkere modus"}
        >
          {donkereModus ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <header className="text-center mb-16">
          <h1 className={`text-5xl md:text-6xl font-bold ${donkereModus ? 'text-white' : 'text-gray-800'} tracking-tight mb-4`}>
            Bio-informatica <span className={`${donkereModus ? 'text-cyan-400' : 'text-green-600'}`}>Analyst</span>
          </h1>
          <p className={`text-xl md:text-2xl ${donkereModus ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Ontdek de wereld van bio-informatica
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`${donkereModus ? 'bg-gray-800/60' : 'bg-white/90'} backdrop-blur-sm p-8 rounded-2xl shadow-xl`}>
            <h2 className={`text-3xl font-semibold mb-6 ${donkereModus ? 'text-cyan-400' : 'text-green-600'}`}>
              Introductie
            </h2>
            <p className={`text-lg leading-relaxed ${donkereModus ? 'text-gray-300' : 'text-gray-700'}`}>
              In de afgelopen decennia heeft de biologie een explosieve groei doorgemaakt, met name op het gebied van de genetica en moleculaire biologie. We worden overspoeld met enorme hoeveelheden data, van complete genoomsequenties tot gedetailleerde structuren van eiwitten.
            </p>
            <p className={`text-lg leading-relaxed ${donkereModus ? 'text-gray-300' : 'text-gray-700'} mt-4`}>
              Hier komt bio-informatica om de hoek kijken. Bio-informatica is een interdisciplinair vakgebied dat de kracht van informatica, statistiek en wiskunde combineert met de complexiteit van de biologie.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-[1.02]">
            <img 
              src={image2} 
              alt="Bio-informatica visualisatie" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <NavigationCard 
            title="Opleiding" 
            description="Leer meer over de Bio-informatica opleiding"
            path="/Opleiding"
            darkMode={donkereModus}
            navigate={navigate}
          />
          <NavigationCard 
            title="Nodige Skills" 
            description="Ontdek welke vaardigheden je nodig hebt als Bio-informaticus"
            path="/Skills"
            darkMode={donkereModus}
            navigate={navigate}
          />
          <NavigationCard 
            title="Werkgebied" 
            description="Verken de diverse werkmogelijkheden in Bio-informatica"
            path="/Werk"
            darkMode={donkereModus} 
            navigate={navigate}
          />
        </div>
      </div>
    </div>
  );
}

function NavigationCard({ title, description, path, darkMode, navigate }) {
  return (
    <div 
      onClick={() => navigate(path)}
      className={`${
        darkMode 
          ? 'bg-gray-800/60 hover:bg-gray-700/70' 
          : 'bg-white/90 hover:bg-gray-50/90'
      } backdrop-blur-sm p-8 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-2`}
    >
      <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-cyan-400' : 'text-green-600'}`}>
        {title}
      </h3>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
        {description}
      </p>
      <div className={`flex justify-end`}>
        <span className={`${darkMode ? 'text-cyan-400' : 'text-green-600'} font-medium`}>
          Meer info →
        </span>
      </div>
    </div>
  );
}

export default App;