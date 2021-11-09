import './App.css';
import Header from './components/Header/Header';
import SectionOne from './components/SectionOne/SectionOne';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Teams from './components/Teams/Teams';
function App() {
  return (
    <div className="App">
      <Header/>
      <SectionOne/>
      <About/>
      <Services/>
      <Projects/>
      <Teams/>
    </div>
  );
}

export default App;
