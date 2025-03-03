import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useTheme } from '../modes/DarkMode';

function Vakken() {
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
            onClick={() => navigate('/Opleiding')}
            className={`flex items-center space-x-2 ${donkereModus ? 'text-cyan-400 hover:text-cyan-300' : 'text-green-600 hover:text-green-700'} transition-colors`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Terug naar Opleiding</span>
          </button>
        </div>

        <header className="text-center mb-12">
          <h1 className={`text-5xl md:text-6xl font-bold ${donkereModus ? 'text-white' : 'text-gray-800'} tracking-tight mb-4`}>
            Vakken <span className={`${donkereModus ? 'text-cyan-400' : 'text-green-600'}`}>Overzicht</span>
          </h1>
          <p className={`text-xl md:text-2xl ${donkereModus ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Ontdek de vakken die je volgt tijdens de opleiding Bio-informatica
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Jaar 1 */}
          <YearCard title="Eerste Jaar" darkMode={donkereModus}>
            <CourseTable darkMode={donkereModus} courses={[
              { name: "Algorithms and Data Structures", credits: 6 },
              { name: "Biochemie (voor Bioinformatica)", credits: 6 },
              { name: "Celbiologie (BIO)", credits: 3 },
              { name: "Celfysiologie", credits: 3 },
              { name: "Chemie van het leven", credits: 3 },
              { name: "Databases", credits: 6 },
              { name: "Foundations of Computer Science", credits: 6 },
              { name: "Introduction to Logic", credits: 6 },
              { name: "Introduction to Programming", credits: 6 },
              { name: "Microbiologie (BIO)", credits: 3 },
              { name: "Moleculaire genetica 1", credits: 6 },
              { name: "Oriëntation Bioinformatica", credits: 3 },
              { name: "Studying and Presenting", credits: 3 }
            ]} />
          </YearCard>

          {/* Jaar 2 */}
          <YearCard title="Tweede Jaar" darkMode={donkereModus}>
            <CourseTable darkMode={donkereModus} courses={[
              { name: "Continue Wiskunde 1", credits: 3 },
              { name: "Continue Wiskunde 2", credits: 3 },
              { name: "Essentials of Computing Systems", credits: 6 },
              { name: "Kunstmatige Intelligentie", credits: 6 },
              { name: "Integration: Biological Data Sharing", credits: 3 },
              { name: "Integratie: Sequence Analysis", credits: 3 },
              { name: "Integration: Technology trends", credits: 3 },
              { name: "Linear Algebra for Computer Scientists 1", credits: 3 },
              { name: "Linear Algebra for Computer Scientists 2", credits: 3 },
              { name: "Moleculaire Genetica 2 voor Bioinformatica", credits: 3 },
              { name: "Moleculaire Microbiologie voor Bioinformatici", credits: 3 },
              { name: "Software Development", credits: 6 },
              { name: "Research Methods in Computer Science", credits: 3 },
              { name: "Statistics for Computer Scientists", credits: 6 },
              { name: "Systeembiologie", credits: 3 },
              { name: "Moleculaire Biologie", credits: 3 }
            ]} />
          </YearCard>

          {/* Jaar 3 & 4 */}
          <YearCard title="Derde & Vierde Jaar" darkMode={donkereModus}>
            <CourseTable darkMode={donkereModus} courses={[
              { name: "Bachelorproject/Bachelorklas", credits: 15 },
              { name: "Data Mining", credits: 6 },
              { name: "Data Science", credits: 6 },
              { name: "Introduction to Reinforcement Learning", credits: 6 },
              { name: "Bio-ethics and Security", credits: 3 },
              { name: "Natural Computing", credits: 6 },
              { name: "Software Engineering", credits: 6 },
              { name: "Computer Graphics", credits: 6 },
              { name: "Human Computer Interaction and Information Visualization", credits: 6 },
              { name: "Biotechnology Science Projects and Entrepreneurship", credits: 12 }
            ]} />
          </YearCard>
        </div>
      </div>
    </div>
  );
}

function YearCard({ title, darkMode, children }) {
  return (
    <div className={`${darkMode ? 'bg-gray-800/70' : 'bg-white/90'} backdrop-blur-sm p-6 rounded-2xl shadow-xl`}>
      <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-cyan-400' : 'text-green-600'}`}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function CourseTable({ darkMode, courses }) {
  return (
    <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-left overflow-x-auto`}>
      <table className="min-w-full">
        <thead>
          <tr className={`border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
            <th className="py-2 px-4 text-left">Vak</th>
            <th className="py-2 px-4 text-center">EC</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className={`border-b ${darkMode ? 'border-gray-700/50' : 'border-gray-200'} ${index === courses.length - 1 ? 'border-0' : ''}`}>
              <td className="py-2 px-4">{course.name}</td>
              <td className="py-2 px-4 text-center">{course.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Vakken;