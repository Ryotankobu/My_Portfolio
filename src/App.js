import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Bubbles from './components/Bubbles';

function App() {
  

  return (
    <div className="app-container">
      <Bubbles />
    
      <Navbar />
      <div className="content-wrapper">
        <div className="scrollable-content">
          <Home />
          <AboutMe />
          <Projects />
          <Skills />
          <Experience />
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default App;
