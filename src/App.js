import './App.css';
import Header from './components/Header/Header';
import SectionOne from './components/SectionOne/SectionOne';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Teams from './components/Teams/Teams';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <SectionOne/>
      <About/>
      <Services/>
      <Projects/>
      <Teams/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
