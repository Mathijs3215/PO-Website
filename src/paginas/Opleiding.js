import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useTheme } from '../modes/DarkMode';

function Opleiding() {
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
        {/* Back button */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className={`flex items-center space-x-2 ${donkereModus ? 'text-cyan-400 hover:text-cyan-300' : 'text-green-600 hover:text-green-700'} transition-colors`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Terug naar Home</span>
          </button>
        </div>

        <header className="text-center mb-12">
          <h1 className={`text-5xl md:text-6xl font-bold ${donkereModus ? 'text-white' : 'text-gray-800'} tracking-tight mb-4`}>
            Opleiding <span className={`${donkereModus ? 'text-cyan-400' : 'text-green-600'}`}>Bio-informatica</span>
          </h1>
          <p className={`text-xl md:text-2xl ${donkereModus ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Een boeiende combinatie van biologie en informatica
          </p>
        </header>

        <div className={`${donkereModus ? 'bg-gray-800/60' : 'bg-white/90'} backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-10`}>
          <p className={`text-lg leading-relaxed ${donkereModus ? 'text-gray-300' : 'text-gray-700'}`}>
            De opleiding bio-informatica is een boeiende combinatie van biologie en informatica. Je leert hoe je met behulp van computers en data-analyse complexe biologische vraagstukken kunt oplossen. Denk hierbij aan het analyseren van DNA-sequenties, het voorspellen van eiwitstructuren of het ontrafelen van de mechanismen achter erfelijke ziekten.
          </p>
        </div>

        <div className="mb-12">
          <h2 className={`text-3xl font-semibold mb-6 ${donkereModus ? 'text-cyan-400' : 'text-green-600'}`}>
            HBO Bio-informatica
          </h2>
          <div className={`${donkereModus ? 'bg-gray-800/60' : 'bg-white/90'} backdrop-blur-sm p-8 rounded-2xl shadow-xl`}>
            <p className={`text-lg leading-relaxed ${donkereModus ? 'text-gray-300' : 'text-gray-700'}`}>
              Tijdens de opleiding bio-informatica ontwikkel je een breed scala aan vaardigheden die essentieel zijn voor het analyseren van biologische data. Je begint met het leren programmeren in talen zoals Python en R, die veel gebruikt worden in de bio-informatica. Vervolgens verdiep je je in de genetica en moleculaire biologie, waarbij je een diepgaand begrip krijgt van de bouw en werking van cellen en organismen. Daarnaast leer je hoe je grote datasets kunt analyseren en interpreteren met behulp van statistische methoden en data-analyse technieken. Tot slot leer je werken met databases en bio-informatica tools, waardoor je in staat bent om complexe biologische vraagstukken op te lossen.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <InfoCard 
            title="Duur van de opleiding" 
            darkMode={donkereModus}
          >
            <ul className={`list-disc list-inside ${donkereModus ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
              <li>4 jaar (voltijd)</li>
              <li>Met VWO diploma is versnellen mogelijk</li>
              <li>Ongeveer 1680 uur</li>
            </ul>
          </InfoCard>
          
          <InfoCard 
            title="Toelatingseisen" 
            darkMode={donkereModus}
          >
            <p className={`${donkereModus ? 'text-gray-300' : 'text-gray-600'}`}>
              HAVO/VWO met profiel N&T of N&G
            </p>
          </InfoCard>

          <InfoCard 
            title="Overgangs eisen" 
            darkMode={donkereModus}
          >
            <ul className={`list-disc list-inside ${donkereModus ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
              <li>Totaal 240 EC-punten</li>
              <li>Minimaal 30 EC-Punten per jaar</li>
            </ul>
          </InfoCard>

          <div className={`${donkereModus ? 'bg-gray-800/60' : 'bg-white/90'} backdrop-blur-sm p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center`}>
            <button 
              onClick={() => navigate('/Vakken')}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                donkereModus 
                  ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-700/30' 
                  : 'bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-700/20'
              }`}
            >
              Vakken bekijken
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, darkMode, children }) {
  return (
    <div className={`${darkMode ? 'bg-gray-800/60' : 'bg-white/90'} backdrop-blur-sm p-8 rounded-2xl shadow-xl`}>
      <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-cyan-400' : 'text-green-600'}`}>
        {title}
      </h3>
      {children}
    </div>
  );
}

export default Opleiding;