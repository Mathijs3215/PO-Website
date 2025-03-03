import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useTheme } from '../modes/DarkMode';

function Skills() {
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
            Benodigde <span className={`${donkereModus ? 'text-cyan-400' : 'text-green-600'}`}>Skills</span>
          </h1>
          <p className={`text-xl md:text-2xl ${donkereModus ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Ontdek de vaardigheden van een bio-informaticus
          </p>
        </header>

        <div className={`${donkereModus ? 'bg-gray-800/60' : 'bg-white/90'} backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-10`}>
          <p className={`text-lg leading-relaxed ${donkereModus ? 'text-gray-300' : 'text-gray-700'}`}>
            Om als bio-informatica analist succesvol te zijn, is een veelzijdige skillset essentieel. Je moet bedreven zijn in programmeertalen zoals Python en R, die de basis vormen van veel bio-informatische analyses. Een diepgaand begrip van genetica, moleculaire biologie en andere biologische disciplines is cruciaal om de context van je data te begrijpen. Vervolgens is het vermogen om grote datasets te analyseren en te interpreteren met behulp van statistische methoden onmisbaar. Kennis van databases en bio-informatica tools stelt je in staat om biologische data effectief op te slaan en te verwerken. Daarbij is het belangrijk om complexe informatie helder te communiceren naar collega's en andere belanghebbenden. Omdat biologische data vaak complex is, moet je een sterk probleemoplossend vermogen hebben. Tot slot is nauwkeurigheid van het grootste belang, want zelfs kleine fouten in biologische data kunnen grote gevolgen hebben.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Programming Skills */}
          <SkillCard 
            title="Programmeervaardigheden" 
            darkMode={donkereModus}
            items={[
              "Python",
              "R Programming",
              "SQL",
              "Shell Scripting",
              "Version Control (Git)"
            ]}
          />

          {/* Biological Knowledge */}
          <SkillCard 
            title="Biologische Kennis" 
            darkMode={donkereModus}
            items={[
              "Moleculaire Biologie",
              "Genetica",
              "Celbiologie",
              "Biochemie",
              "Microbiologie"
            ]}
          />

          {/* Analytical Skills */}
          <SkillCard 
            title="Analytische Vaardigheden" 
            darkMode={donkereModus}
            items={[
              "Data Analyse",
              "Statistiek",
              "Machine Learning",
              "Probleemoplossend denken",
              "Kritisch denken"
            ]}
          />

          {/* Communication Skills */}
          <SkillCard 
            title="Communicatievaardigheden" 
            darkMode={donkereModus}
            items={[
              "Technische documentatie schrijven",
              "Presentatievaardigheden",
              "Samenwerken in teams",
              "Communiceren met stakeholders",
              "Wetenschappelijk schrijven"
            ]}
          />

          {/* Technical Tools */}
          <SkillCard 
            title="Technische Tools" 
            darkMode={donkereModus}
            items={[
              "Bioinformatica databases",
              "Sequence analysis tools",
              "Visualisatie software",
              "High-performance computing",
              "Cloud platforms"
            ]}
          />

          {/* Research Skills */}
          <SkillCard 
            title="Onderzoeksvaardigheden" 
            darkMode={donkereModus}
            items={[
              "Wetenschappelijk onderzoek",
              "Literatuuronderzoek",
              "Experimenteel ontwerp",
              "Data verzameling",
              "Resultaatanalyse"
            ]}
          />
        </section>
      </div>
    </div>
  );
}

function SkillCard({ title, darkMode, items }) {
  return (
    <div className={`${darkMode ? 'bg-gray-800/60' : 'bg-white/90'} backdrop-blur-sm p-6 rounded-2xl shadow-xl transition-all duration-300`}>
      <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-cyan-400' : 'text-green-600'}`}>
        {title}
      </h2>
      <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-left list-disc pl-5 space-y-2`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;