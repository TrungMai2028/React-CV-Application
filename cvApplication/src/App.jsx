import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import ProjectSection from './components/ProjectSection';
import TechnicalSkills from './components/TechnicalSkills';

function App() {
  return (
    <div className="resume-container">
      <Header />
      <Education />
      <Experience />
      <ProjectSection />
      <TechnicalSkills />
      
    </div>
  );
}

export default App;
