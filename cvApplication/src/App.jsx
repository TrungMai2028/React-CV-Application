import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Project';
import TechnicalSkills from './components/TechnicalSkills';

function App() {
  return (
    <div className="resume-container">
      <Header />
      <Education />
      <Experience />
      <Project />
      <TechnicalSkills />
      
    </div>
  );
}

export default App;
