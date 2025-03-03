import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useTheme } from "../modes/DarkMode";

function Werk() {
  const { donkereModus, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen ${
        donkereModus
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-200"
      } transition-colors duration-500`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${
            donkereModus ? "bg-blue-900/20" : "bg-green-200/40"
          } blur-3xl`}
        ></div>
        <div
          className={`absolute top-1/3 -left-40 w-80 h-80 rounded-full ${
            donkereModus ? "bg-green-900/20" : "bg-blue-200/40"
          } blur-3xl`}
        ></div>
        <div
          className={`absolute -bottom-20 right-1/3 w-72 h-72 rounded-full ${
            donkereModus ? "bg-cyan-900/20" : "bg-cyan-200/40"
          } blur-3xl`}
        ></div>
      </div>

      {/* Dark mode toggle */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full transition-all duration-300 ${
            donkereModus
              ? "bg-gray-800 text-gray-200 shadow-lg shadow-cyan-500/20"
              : "bg-white text-gray-800 shadow-lg"
          }`}
          aria-label={
            donkereModus
              ? "Schakel naar lichte modus"
              : "Schakel naar donkere modus"
          }
        >
          {donkereModus ? "☀️" : "🌙"}
        </button>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Back button */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/")}
            className={`flex items-center space-x-2 ${
              donkereModus
                ? "text-cyan-400 hover:text-cyan-300"
                : "text-green-600 hover:text-green-700"
            } transition-colors`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Terug naar Home</span>
          </button>
        </div>

        <header className="text-center mb-12">
          <h1
            className={`text-5xl md:text-6xl font-bold ${
              donkereModus ? "text-white" : "text-gray-800"
            } tracking-tight mb-4`}
          >
            Bio-informatica{" "}
            <span
              className={`${donkereModus ? "text-cyan-400" : "text-green-600"}`}
            >
              Analist
            </span>
          </h1>
          <p
            className={`text-xl md:text-2xl ${
              donkereModus ? "text-gray-300" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            De data-expert in de levenswetenschappen
          </p>
        </header>

        {/* Introduction section */}
        <div
          className={`${
            donkereModus ? "bg-gray-800/60" : "bg-white/90"
          } backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-10`}
        >
          <p
            className={`text-lg leading-relaxed ${
              donkereModus ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Een bio-informatica analist is de data-expert in de
            levenswetenschappen. Ze werken met enorme hoeveelheden biologische
            gegevens, zoals DNA-sequenties, eiwitstructuren en
            genexpressiepatronen, en gebruiken hun kennis van informatica en
            biologie om deze te analyseren en interpreteren.
          </p>
        </div>

        {/* Main responsibilities section */}
        <h2
          className={`text-3xl font-semibold mb-6 ${
            donkereModus ? "text-cyan-400" : "text-green-600"
          }`}
        >
          Werkzaamheden
        </h2>
        <div
          className={`${
            donkereModus ? "bg-gray-800/60" : "bg-white/90"
          } backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-12`}
        >
          <p
            className={`text-lg leading-relaxed ${
              donkereModus ? "text-gray-300" : "text-gray-700"
            } mb-6`}
          >
            De werkzaamheden van een bio-informatica analist vormen een
            dynamisch samenspel van verschillende cruciale taken. In de kern
            draait het om data-analyse, waarbij complexe biologische datasets
            worden ontleed met behulp van geavanceerde statistische methoden en
            gespecialiseerde bio-informatica tools.
          </p>
          <p
            className={`text-lg leading-relaxed ${
              donkereModus ? "text-gray-300" : "text-gray-700"
            } mb-6`}
          >
            Dit vereist niet alleen een scherp analytisch inzicht, maar ook een
            grondige kennis van de onderliggende biologische processen. Parallel
            hieraan is het databasebeheer, waarbij biologische databases niet
            alleen worden onderhouden, maar ook geoptimaliseerd voor efficiënt
            gebruik.
          </p>
          <p
            className={`text-lg leading-relaxed ${
              donkereModus ? "text-gray-300" : "text-gray-700"
            } mb-6`}
          >
            Een ander belangrijk aspect is het programmeren, waarbij scripts en
            programma's worden ontwikkeld om data te analyseren en de resultaten
            op een heldere en visueel aantrekkelijke manier te presenteren.
          </p>
          <p
            className={`text-lg leading-relaxed ${
              donkereModus ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Tenslotte is het van belang de resultaten te communiceren. Dit
            gebeurt vaak door middel van rapportage, waarin onderzoeksresultaten
            op een duidelijke en overtuigende manier worden gepresenteerd aan
            collega's en andere belanghebbenden, zodat de bevindingen optimaal
            kunnen worden benut.
          </p>
        </div>

        {/* Key responsibilities cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <ResponsibilityCard
            title="Data-analyse"
            darkMode={donkereModus}
            icon="📊"
            description="Analyse van complexe biologische datasets met geavanceerde statistische methoden"
            extraInfo="Bio-informatica analisten verwerken grote hoeveelheden genetische sequenties, proteomics data, en andere biologische datasets. Ze gebruiken statistische technieken, machine learning en gespecialiseerde algoritmen om patronen te identificeren, biologische processen te modelleren en nieuwe inzichten te verkrijgen uit complexe data."
          />

          <ResponsibilityCard
            title="Databasebeheer"
            darkMode={donkereModus}
            icon="🗃️"
            description="Onderhouden en optimaliseren van biologische databases voor efficiënt gebruik"
            extraInfo="Het ontwerpen, implementeren en beheren van biologische databases is een cruciaal aspect. Dit omvat het waarborgen van data-integriteit, het optimaliseren van query-prestaties, en het toegankelijk maken van gegevens voor onderzoekers. Goede kennis van SQL en NoSQL databases is essentieel, evenals begrip van data-architectuur."
          />

          <ResponsibilityCard
            title="Programmeren"
            darkMode={donkereModus}
            icon="💻"
            description="Ontwikkelen van scripts en programma's voor data-analyse en visualisatie"
            extraInfo="Bio-informatici schrijven code in talen zoals Python, R, en Perl om aangepaste analyses uit te voeren. Ze ontwikkelen pipeline-systemen voor het automatiseren van analyses, creëren interactieve visualisaties, en bouwen tools die complexe biologische data inzichtelijk maken voor niet-technische gebruikers."
          />

          <ResponsibilityCard
            title="Communicatie"
            darkMode={donkereModus}
            icon="📝"
            description="Rapporteren van onderzoeksresultaten aan collega's en stakeholders"
            extraInfo="Het effectief communiceren van resultaten is essentieel. Bio-informatici schrijven technische rapporten, publiceren artikelen in wetenschappelijke tijdschriften, presenteren bevindingen op conferenties, en vertalen complexe analyses naar begrijpelijke inzichten voor biologen, medici en andere belanghebbenden."
          />
        </div>
      </div>
    </div>
  );
}

function ResponsibilityCard({ title, darkMode, icon, description, extraInfo }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800/60" : "bg-white/90"
      } backdrop-blur-sm p-6 rounded-2xl shadow-xl transition-all duration-300 hover:transform hover:scale-102 cursor-pointer`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3
        className={`text-xl font-semibold mb-3 ${
          darkMode ? "text-cyan-400" : "text-green-600"
        }`}
      >
        {title}
      </h3>
      <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-2`}>
        {description}
      </p>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`pt-4 border-t ${
            darkMode ? "border-gray-700" : "border-gray-200"
          } mt-4`}
        >
          <p
            className={`${
              darkMode ? "text-gray-400" : "text-gray-700"
            } text-sm leading-relaxed`}
          >
            {extraInfo}
          </p>
        </div>
      </div>

      <div
        className={`flex justify-center mt-3 text-sm ${
          darkMode ? "text-cyan-400" : "text-green-600"
        }`}
      >
        {isExpanded ? "Minder info ▲" : "Meer info ▼"}
      </div>
    </div>
  );
}

export default Werk;
