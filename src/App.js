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
      <Header Link1="ABOUT" Link2="SERVICES" Link3="PROJECTS" Link4="TEAM" Link5="CONTACT" LogoImage="https://res.cloudinary.com/aniket98571/image/upload/v1636621222/logo_denw3g.svg"/>
      <SectionOne HeroText="Your Commitment, Our Priority." HeroImage="https://res.cloudinary.com/aniket98571/image/upload/v1636621109/team_esifr6.svg"/>
      <About MainText="Who are We?"/>
      <Services MainText="Services"/>
      <Projects MainText="Projects"/>
      <Teams MainText="Teams"/>
      <Contact MainText="Contact"/>
      <Footer FooterLogo="https://res.cloudinary.com/aniket98571/image/upload/v1636621222/logo_denw3g.svg" FooterContents={{Contact_Email:"thor98571@gmail.com",SubHeadingText:"We Strive for better future",SocialMedia:{Text1:"Linkedin",Link1:"#",Text2:"Facebook",Link2:"#"}}}/>
    </div>
  );
}

export default App;
